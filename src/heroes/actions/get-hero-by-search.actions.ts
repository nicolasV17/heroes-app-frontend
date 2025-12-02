import { heroApi } from "../api/hero.api"
import type { Hero } from "../types/hero.interface";

const BASE_URL = import.meta.env.VITE_API_URL;


interface Options {
  name?:string;
  team?:string;
  category?:string;
  universe?:string;
  status?:string;
  strength:string;

}

export const getHeroSearchAction = async ({name="",team="",category="",universe="",status="",strength=""} : Options) : Promise<Hero[]> => {

    if(name == "" && team == "" && category == "" && universe == "" && status == "" && strength == "" ) return [];

    const {data} = await heroApi.get<Hero[]>(`/search`,{
      params: {
        name:name,
        team:team,
        category:category,
        universe:universe,
        status:status,
        strength:strength
      }
    });

    return data.map((h) => ( {...h , image: `${BASE_URL}/images/${h.image}`}));

   
}