import useData from "./useData";
import { GameQuery } from "../App";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
    id: number;
    slug: string;
    name: string;
    background_image: string,
    parent_platforms: {platform: PlatForm}[];
    metacritic: number;
    rating_top: number
  }
  
const useGame = (gamequery: GameQuery) => 
                useData<Games>('/games', 
                              {params: 
                                {
                                  genres: gamequery.genre?.id, 
                                  platforms: gamequery.platform?.id, 
                                  ordering: gamequery.sortOrder,
                                  search: gamequery.searchText
                                }}, 
                              [gamequery]
                )

export default useGame;