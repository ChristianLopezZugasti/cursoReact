import { Route, Routes } from "react-router"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalApp } from "../JournalApp"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
      <Routes>
 
  {/* Esta es un ruta padre, y definimos susn  hoias en las ruts de cada componentes */}
        <Route path="/auth/*"  element={ <AuthRoutes/>}/>


        <Route path="/"  element={ <JournalRoutes/>}/>
    



      </Routes>


    )
}
