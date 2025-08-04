import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
  //QUiero tener acceso a los datos del contexto,y le decimos
  //que use el contexto que creamos
  

  const {user,setUser} = useContext(UserContext)
  
  
  return (
        <>
            <h1> LoginApp</h1>
            <hr/>

            <pre>
              {JSON.stringify(user,null,3)}
            </pre>

            <button className="btn btn-primary"
            onClick={()=> setUser({id:123,name:'juan',email:'chrslopez_28@hotmail.com'}) } >
                Establecer usuario
            </button>
        </>
)
}
