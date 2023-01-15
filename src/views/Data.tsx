import { useEffect, useState } from "react";
import { restApi } from "../services/restAPI";

interface DataProps {
  sessionKey: string;
};

export const Data = ({ sessionKey }: DataProps) => {
  const [data, setData] = useState();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const getDataSet = async () => {
    const response = await restApi.getData(sessionKey);
    if (response?.status === 200 && response?.data) {
      setData(response.data);
    }
  };

  useEffect(() => {
    getDataSet();
  }, []);

  return (
    <></>
  );
};
