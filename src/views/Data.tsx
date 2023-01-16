import { Circle } from "react-leaflet";
import { useGetScatterplotUseCase } from "./useCases/getScatterplotUseCase";

interface DataProps {
  sessionKey: string;
};

export const Data = ({ sessionKey }: DataProps) => {
  const { array } = useGetScatterplotUseCase(sessionKey);

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
