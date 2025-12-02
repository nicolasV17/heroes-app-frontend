
import { RouterProvider } from 'react-router'
import { appRouter} from './router/app.routes'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { FavoriteHeroProvider } from './heroes/context/FavoriteHeroContext'


const queryClient = new QueryClient()


const HeroesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteHeroProvider>
       <RouterProvider router={appRouter} />
          <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteHeroProvider>
    </QueryClientProvider>
   
  )
}

export default HeroesApp