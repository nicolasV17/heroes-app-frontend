import { useQuery } from '@tanstack/react-query'
import { getHeroSlugAction } from '../actions/get-hero-by-slug.actions'

export const useHeroSlug = (slug:string) => {

  return useQuery({
    queryKey:["hero-slug-information",slug],
    queryFn: () => getHeroSlugAction(slug),
    staleTime : 1000 * 60 * 5,
    retry:false
  })

}
