import { Navigate, Route, Routes,Link } from "react-router"
import { HomePage } from "./HomePage"
import { AboutPage } from "./AboutPage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"


export const MainApp = () => {


  return (
        <UserProvider>

            <h1> MainApp</h1>
                <NavBar/>
            <hr/>


            


            <Routes>{/*   Recibe unos hijos, como si fuera una vista */}
                <Route  path="/" element={<HomePage/>} />
                <Route  path="login" element={<LoginPage/>} />
                <Route  path="about" element={<AboutPage/>} />

                {/* <Route path="/*" element={ <LoginPage/>}  /> */}
                <Route path="/*" element={<Navigate  to="/about" />} />

            </Routes>
        </UserProvider> 

)
}



