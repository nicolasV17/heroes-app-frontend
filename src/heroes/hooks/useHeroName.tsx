import { useQuery } from '@tanstack/react-query'
import {  getHeroSearchAction } from '../actions/get-hero-by-search.actions'

export const useHeroName = (name:string = "" ,strength:string = "", team:string = "", category:string = "" , universe:string = "" , status:string = "" ) => {
const options = {
  name:name,
  team:team,
  category:category,
  universe:universe,
  status:status,
  strength:strength
}
  return useQuery({
    queryKey:["search",{name, strength}],
    queryFn: () => getHeroSearchAction(options),
    staleTime : 1000 * 60 * 5,
    retry:false
  })

}
