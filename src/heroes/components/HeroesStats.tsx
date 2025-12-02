import { Badge } from '@/components/ui/badge'
import { Heart, Trophy, Users, Zap } from 'lucide-react'
import HeroesStat from './HeroesStat'
import { useHeroSummary } from '../hooks/useHeroSummary'
import { FavoriteHeroContext } from '../context/FavoriteHeroContext'
import { use } from 'react'


export const HeroesStats = () => {

 const {favoriteCount } =  use(FavoriteHeroContext);

  const {data:summary} = useHeroSummary();

 const total = summary?.totalHeroes || 0;

const percentaje = Math.round((favoriteCount / total) * 100);



 
  return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
     
            <HeroesStat title="Total Characterss" icono={<Users className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-2xl font-bold">{summary?.totalHeroes}</div>
                <div className="flex gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">
                    {summary?.heroCount} Heroes
                    </Badge>
                    <Badge variant="destructive" className="text-xs">
                    {summary?.villainCount}Villains
                    </Badge>
                </div>
           </HeroesStat>

           <HeroesStat title="Favorites" icono={<Heart className="h-4 w-4 text-muted-foreground" />}>
              <div className="text-2xl font-bold text-red-600">{favoriteCount}</div>
               <p className="text-xs text-muted-foreground">{percentaje }% of total</p>
          </HeroesStat>

           <HeroesStat title="Strongest" icono={<Zap className="h-4 w-4 text-muted-foreground" />}>
               <div className="text-lg font-bold">{summary?.strongestHero.alias}</div>
               <p className="text-xs text-muted-foreground">Strength: {summary?.strongestHero.strength}/10</p>
          </HeroesStat>


           <HeroesStat title="Smartest" icono={<Trophy className="h-4 w-4 text-muted-foreground" />}>
                <div className="text-lg font-bold">{summary?.smartestHero.alias}</div>
                <p className="text-xs text-muted-foreground">Intelligence: {summary?.smartestHero.intelligence}/10</p>
          </HeroesStat>

        
         
        </div>
  )
}
