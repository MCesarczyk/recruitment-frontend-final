import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { transformPolygonFormat } from "../../app/utils";
import { restApi } from "../../services/restAPI";

export const useGetPolygonDataUseCase = (sessionKey: string) => {
  const [polygon, setPolygon] = useState<LatLngExpression[]>([]);
  const map = useMap();

  const getSecondaryData = async () => {
    const response = await restApi.getSecondary(sessionKey);
    if (response?.status === 200 && response?.data) {
      const { polygon, center } = transformPolygonFormat(response.data.extent);
      setPolygon(polygon);
      map.flyTo(center, 15);
    }
  };

  useEffect(() => {
    getSecondaryData();
  }, [])

  return { polygon };
};
