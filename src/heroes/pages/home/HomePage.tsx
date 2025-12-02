import {

  Heart,

} from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumboTron } from "@/components/custom/CustomJumboTron"
import { HeroesStats } from "@/heroes/components/HeroesStats"
import HeroesGrid from "@/heroes/components/HeroesGrid"
import { use, useMemo} from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadCrums } from "@/components/custom/CustomBreadCrums"
import { useSearchParams } from "react-router"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"

type permittedTabs = "all" | "favorites"|"heroes"|"villains";

export default function HomePage() {


  const [searchParams, setSearchParams] = useSearchParams();

  const activeTabs = searchParams.get("tab") as permittedTabs ?? "all";
  const page = searchParams.get("page")  ?? "1";
  const limit = searchParams.get("limit")  ?? "6";
  const category = searchParams.get("category")  ?? "all";

  const selectedTabs = useMemo(()=>{

    const permitedTabsArray: permittedTabs[] = ["all","favorites","heroes","villains"];

    return permitedTabsArray.includes(activeTabs) ? activeTabs : "all";
    
  },[activeTabs])


 const {favoriteCount , favorites } =  use(FavoriteHeroContext);


 const {data:heroesResponse} = usePaginatedHero({page,limit,category});

 

  const {data:summaryCount} = useHeroSummary();




 

  return (
    <>
       
      
        {/* Header */}
         <CustomJumboTron titulo="Universo de SuperHeroes" subtitulo="Descubre, explora y administra super heroes y villanos"/>

         <CustomBreadCrums currentPage="home"/>


        {/* Stats Dashboard */}
         <HeroesStats />


        {/* Tabs */}
        <Tabs value={selectedTabs} className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger onClick={() => setSearchParams((prev)=>{
                prev.set("tab","all")
                prev.set("category","all")
                prev.set("page","1")
                return prev.toString()
              })} value="all">All Characters ({summaryCount?.totalHeroes})</TabsTrigger>
              <TabsTrigger onClick={() => setSearchParams((prev)=>{
                prev.set("tab","favorites")
                return prev.toString()
              })} value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Favorites ({favoriteCount})
              </TabsTrigger>
              <TabsTrigger onClick={() => setSearchParams((prev)=>{
                prev.set("tab","heroes")
                prev.set("category","hero")
                prev.set("page","1")
                return prev.toString()
              })} value="heroes">Heroes ({summaryCount?.heroCount})</TabsTrigger>
              <TabsTrigger onClick={() => setSearchParams((prev)=>{
                 prev.set("tab","villains")
                 prev.set("category","villain")
                 prev.set("page","1")
                return prev.toString()
              })} value="villains">Villains ({summaryCount?.villainCount})</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
               <h1>Todos los personajes</h1>
               <HeroesGrid heroes={heroesResponse?.heroes || []}/>
            </TabsContent>
            <TabsContent value="favorites">
               <h1>Todos los personajes favoritos</h1>
                <HeroesGrid heroes={favorites}/>
            </TabsContent >
             <TabsContent value="heroes">
               <h1>Todos los heroes</h1>
                 <HeroesGrid heroes={heroesResponse?.heroes || []}/>
            </TabsContent>
             <TabsContent value="villains">
                 <h1>Todos los villanos</h1>
                  <HeroesGrid heroes={heroesResponse?.heroes || []}/>
            </TabsContent>

        </Tabs>

    
        {/* Pagination */}

        {
          selectedTabs != "favorites" && (

          <CustomPagination totalPages={heroesResponse?.pages ?? 1}/>

          )
        }
       
    </>
   
  )
}
