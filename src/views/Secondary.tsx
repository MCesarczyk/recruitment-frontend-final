import { Polygon } from "react-leaflet";
import { useGetPolygonDataUseCase } from "./useCases/getPolygonDataUseCase";

interface SecondaryProps {
  sessionKey: string;
};

export const Secondary = ({ sessionKey }: SecondaryProps) => {
  const { polygon } = useGetPolygonDataUseCase(sessionKey);

  return (
    <>
      {polygon && <Polygon positions={polygon} />}
    </>
  );
};
