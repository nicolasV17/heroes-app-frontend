import { CustomJumboTron } from '@/components/custom/CustomJumboTron'
import { HeroesStats } from '@/heroes/components/HeroesStats'
import { SearchControls } from './ui/SearchControls'
import { CustomBreadCrums } from '@/components/custom/CustomBreadCrums'
import HeroesGrid from '@/heroes/components/HeroesGrid'
import { useSearchParams } from 'react-router'
import { useHeroName } from '@/heroes/hooks/useHeroName'


const rutas = [
  {to:"/" , label:"inicio"},
   {to:"/" , label:"inicio"},
    {to:"/" , label:"inicio"},
]

const SearchPage = () => {

  const [searchParams] = useSearchParams();


   const urlName = searchParams.get("name") ?? "";
   const strength = searchParams.get("strength") ?? "";


   const {data:heroesEncontrados} = useHeroName(urlName,strength);


  return (
    <>

     
       <CustomJumboTron titulo="Búsqueda de SuperHéroes" subtitulo='Descubre, explora y administra super héroes y villanos'/>

       <CustomBreadCrums currentPage='search' rutas={rutas}/>

       <HeroesStats/>

        <SearchControls/>

        <HeroesGrid heroes={heroesEncontrados} />

    </>
  )
}

export default SearchPage