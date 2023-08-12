import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { PlatForm } from "../entities/PlatForm";

const apiClient = new APIClient<PlatForm>("/platforms/lists/parents");
const usePlatforms = () => {
  return useQuery<FetchResponse<PlatForm>, Error>({
    queryKey: ["platforms"],
    queryFn: () => {
      return apiClient.getAll();
    },
    staleTime: ms("24h"),
  });
};

export default usePlatforms;
