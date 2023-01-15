import { useEffect, useState } from "react";
import { restApi } from "../services/restAPI";

interface SecondaryProps {
  sessionKey: string;
};

export const Secondary = ({ sessionKey }: SecondaryProps) => {
  const [polygon, setPolygon]=useState();

  useEffect(() => {
      console.log("Polygon: ", polygon);
  }, [polygon]);

  const getSecondaryData = async () => {
    const response = await restApi.getSecondary(sessionKey);
    if(response?.status===200 && response?.data){
      setPolygon(response.data.extent)
    }
  };

  useEffect(() => {
    getSecondaryData();
  }, [])

  return (
    <></>
  );
};
