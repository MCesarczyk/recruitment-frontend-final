import { useEffect, useState } from "react";
import { Circle, useMap } from "react-leaflet";
import { SCATTERPLOT_MAX_DATA_VALUE, SCATTERPLOT_MIN_DATA_VALUE } from "../app/constants";
import { ColorScaleType, ScatterplotData, ScatterPlotPoint } from "../app/types";
import { buildScatterMapHelper, calculateBoundaryCenter } from "../app/utils";
import { restApi } from "../services/restAPI";

interface DataProps {
  sessionKey: string;
};

export const Data = ({ sessionKey }: DataProps) => {
  const [data, setData] = useState<ScatterplotData | undefined>();
  const [array, setArray] = useState<ScatterPlotPoint[]>([]);
  const map = useMap();

  const getDataSet = async () => {
    const response = await restApi.getData(sessionKey);
    if (response?.status === 200 && response?.data) {
      setData(response.data);
    }
  };

  const createDataArray = (data: ScatterplotData) => {
    const array = data && buildScatterMapHelper(
      data.coordinates_bounding_box,
      data.data,
      SCATTERPLOT_MAX_DATA_VALUE,
      SCATTERPLOT_MIN_DATA_VALUE,
      ColorScaleType.water,
    );

    array && setArray(array);
  };

  const centerDataset = (data: ScatterplotData) => {
    const boundaryCenter: any = calculateBoundaryCenter(data.coordinates_bounding_box);
    map.flyTo([boundaryCenter[1], boundaryCenter[0]], 16);
  };

  useEffect(() => {
    if (data) {
      createDataArray(data);
      centerDataset(data);
    }
  }, [data]);

  useEffect(() => {
    getDataSet();
  }, []);

  return (
    <>
      {array ? array?.map(point => (
        <Circle key={point[0] + point[1]}
          center={[point[1], point[0]]}
          pathOptions={{ color: `${point[3]}`, fillOpacity: 1 }}
          radius={5}
        />
      )) : null}
    </>
  );
};
