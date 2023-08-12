import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () => {
      return apiClient.getAll();
    },
    staleTime: ms("24h"),
  });
};

export default useGenres;
