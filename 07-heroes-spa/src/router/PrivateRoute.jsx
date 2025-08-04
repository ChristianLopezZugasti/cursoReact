import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router"

export const PrivateRoute = ({children}) => {
  
  const {logged} = useContext(AuthContext)
  const { search,pathname} = useLocation()

  const lastPath = pathname + search  ///search + el query


  localStorage.setItem('lastPath',lastPath)


  return (logged) ? children
  :<Navigate to="/login" />
}
