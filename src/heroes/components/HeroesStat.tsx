import  { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    title:string;
    icono:React.ReactNode;
}

const HeroesStat = ({title,icono,children} : Props) => {
  return (
         <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              {icono}
            </CardHeader>
            <CardContent>
              {children}
            </CardContent>
          </Card>
  )
}

export default HeroesStat