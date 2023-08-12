import { useQuery } from "@tanstack/react-query";
import { ScreenShots } from "../entities/ScreenShots";
import APIClient from "../services/api-client";

const useGameScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenShots", gameId],
    queryFn: () => apiClient.getAll(),
  });
};

export default useGameScreenShots;
