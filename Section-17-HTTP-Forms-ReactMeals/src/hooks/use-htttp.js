import { Axios } from "axios";
import React, { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);

    try {
      const response = await Axios(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request Failed!");
      }

      return response;
      //   applyData(response);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
