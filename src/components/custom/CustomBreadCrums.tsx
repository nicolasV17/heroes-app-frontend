import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SlashIcon } from "lucide-react"
import React from "react"
import { Link } from "react-router"


interface rutas {
    label:string,
    to:string
}

interface Props {
    currentPage:string
    rutas?: rutas[]
}

export const CustomBreadCrums = ({currentPage,rutas = []}:Props) => {
  return (
   <Breadcrumb className="my-5">
    <BreadcrumbList>
            <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
          
               {
                rutas.map((ruta,index)=> (
                     <React.Fragment key={index}>
                      <BreadcrumbItem>
                         <BreadcrumbSeparator> 
                           <SlashIcon/>
                         </BreadcrumbSeparator>
                        <BreadcrumbLink asChild>
                          <Link to={ruta.to}>{ruta.label}</Link>
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                    </React.Fragment>
                ))
               }
                <BreadcrumbSeparator> 
                   <SlashIcon/>
                </BreadcrumbSeparator>
              
            
                <BreadcrumbItem >
                <BreadcrumbLink  href="/components" className="text-black">{currentPage}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
            </BreadcrumbItem>
        </BreadcrumbList>
    </Breadcrumb>
  )
}
