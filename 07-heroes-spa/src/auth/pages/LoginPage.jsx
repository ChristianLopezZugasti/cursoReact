import { useContext } from "react"
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {
  
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {


    const lastPath = localStorage.getItem('lastPath') || '/';

    console.log(lastPath)
    login('Christian');


      

      navigate(lastPath,{
        replace: true  //remplaza el historial
      })
  }
  
  
  return (
    <>
      <h1> Login</h1>
      <hr/>

      <button className="btn btn-primary"
      onClick={onLogin} >
        Login
      </button> 
    </>
  )
}
