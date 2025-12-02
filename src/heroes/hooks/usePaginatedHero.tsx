import { useQuery } from '@tanstack/react-query';
import { getHeroesByPageActions } from '../actions/get-heroes-by-page.actions';

interface Props {
 page:string;
 limit:string;
 category:string
}

export const usePaginatedHero = ({page,limit,category = "all"} : Props) => {
  
  return useQuery({
  queryKey:["heroes",{page,limit,category}],
  queryFn: () => getHeroesByPageActions(page ? parseInt(page) : 1,limit ? parseInt(limit) : 6 , category),
  staleTime : 1000 * 60 * 5

 })


}
