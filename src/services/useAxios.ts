import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from 'axios';

export const useAxios = <T>(asyncFunction: (...params: any[]) => Promise<AxiosResponse<T>>, params: any[] = [], immediate: boolean = true) => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback((callbackParams: any[] = []) => {
    setIsFetching(true);
    setError(null);
    setResponse(null);

    asyncFunction(...callbackParams)
      .then((response) => {
        setResponse(response.data);
        setTimeout(() => setIsFetching(false), 0);
      })
      .catch((error) => {
        setError(error);
        setIsFetching(false);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [execute, immediate]);

  return {
    isFetching, response, error, execute,
  };
};