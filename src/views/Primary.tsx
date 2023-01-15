import { useEffect } from "react";
import { restApi } from "../services/restAPI";

export const Primary = () => {
  const getPrimaryData = async () => {
    const response = await restApi.getPrimary();
    console.log(response);

  };

  useEffect(() => {
    getPrimaryData();
  }, [])

  return (
    <></>
  );
};
