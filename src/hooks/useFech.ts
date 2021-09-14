import useSWR from "swr";
import api from "../services/api";

export function useFetch<Data = any, Error = any>(url: string): any {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error, mutate };
}
