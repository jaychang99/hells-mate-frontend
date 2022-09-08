import { useEffect, useState } from "react";
import axios from "axios";

export function useAxiosData(url: string) {
  const client = axios.create({
    baseURL: "http://localhost:8000",
  });

  const [apiGroupData, setApiGroupData] = useState(null);
  useEffect(() => {
    client
      .get(url, {})
      .then((response) => {
        console.log("query sent", response.data);
        setTimeout(() => {
          setApiGroupData(response.data);
        }, 2500);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, []);

  return apiGroupData;
}
