import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import APIClient from "../services/api-client";

const useScreenshots = (gameID: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameID}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameID],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
