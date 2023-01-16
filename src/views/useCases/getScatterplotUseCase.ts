import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { ColorScaleType } from "../../app/enums";
import { ScatterplotData } from "../../app/interfaces";
import { ScatterPlotPoint } from "../../app/types";
import { SCATTERPLOT_MAX_DATA_VALUE, SCATTERPLOT_MIN_DATA_VALUE } from "../../app/constants";
import { buildScatterMapHelper, calculateBoundaryCenter } from "../../app/utils";
import { restApi } from "../../services/restAPI";

export const useGetScatterplotUseCase = (sessionKey: string) => {
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

  return { array };
};
