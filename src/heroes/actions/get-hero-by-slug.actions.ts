import { heroApi } from "../api/hero.api"
import type { HeroSlugResponse } from "../types/get-hero-by-slug.response";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroSlugAction = async (slug:string) => {

    const {data} = await heroApi.get<HeroSlugResponse>(`/${slug}`);

    return {
      ...data,
       image: `${BASE_URL}/images/${data.image}`
    }
}