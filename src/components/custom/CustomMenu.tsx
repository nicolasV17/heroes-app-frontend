import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@radix-ui/react-navigation-menu'
import { Link, useLocation } from 'react-router'

export const CustomMenu = () => {

  const { pathname } =  useLocation();

  const isActive = (path:string) => {
    return path === pathname
  }

  return (
    <NavigationMenu>
    <NavigationMenuList className="flex space-x-2">
        {/* home */}
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(isActive("/") && "bg-slate-200" , "p-2 rounded-md")}>
            <Link to="/">Home</Link>
        </NavigationMenuLink>
        </NavigationMenuItem>
        {/* search */}
        <NavigationMenuItem>
        <NavigationMenuLink asChild className={cn(isActive("/search") && "bg-slate-200", "p-2 rounded-md")}>
            <Link to="/search">Search</Link>
        </NavigationMenuLink>
        </NavigationMenuItem>
    </NavigationMenuList>
    </NavigationMenu>
  )
}
