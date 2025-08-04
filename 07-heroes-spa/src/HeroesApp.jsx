
import { BrowserRouter } from "react-router";
import { AppRouter } from "./router/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";


//en cualquier pagina, tengo acceso a los datos del authProvider
export const HeroesApp = () => {
  return (
    <>
    
      <AuthProvider>
            <AppRouter/>
      </AuthProvider>
    
    </>
  )
}

