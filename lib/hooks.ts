import useSWR from "swr";
import fetcher from "./fetcher";

export const useGetUser = () => {
  const { data, error } = useSWR("/getUser", fetcher);

  return {
    user: data,
    isError: error,
    isLoading: !data && !error,
  };
};

export const usePlaylist = () => {
  const { data, error } = useSWR("/playlist", fetcher);

  return {
    playLists: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};
