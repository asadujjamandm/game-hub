import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T>{
    count: number;
    results: T[];
}

const useData = <T>(endpoints: string, deps: any[], requestConfig?: AxiosRequestConfig) => {
  const [datas, setDatas] = useState<T[]>([]);
  const [error, setError] = useState();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setloading(true);

    apiClient
      .get<FetchResponse<T>>(endpoints, {signal:controller.signal, ...requestConfig})
      .then((res) => {
        setDatas(res.data.results);
        setloading(false);
      })
      .catch((err) => {
        if(err instanceof CanceledError) return
        console.log(err.message);
        setError(err.message);        
        setloading(false);
      });
      return ()=> controller.abort();
  }, deps? [...deps]: []);

  return {datas, error, loading};
}

export default useData;