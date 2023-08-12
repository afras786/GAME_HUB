import { PlatForm } from "./PlatForm";
import { Genre } from "./Genre";
import { Publishers } from "../pages/Publishers";

export interface Games {
  id: number;
  slug: string;
  name: string;
  genres: Genre[];
  publishers: Publishers[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
  rating_top: number;
}
