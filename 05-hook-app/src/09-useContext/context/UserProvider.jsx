
//Aparte de cualquier prop, recibimos el children,

import { useState } from "react"
import { UserContext } from "./UserContext"


// const user = {
//     id: 123,
//     name: 'Fenanrdo Hererar',
//     email: 'Chrislopez_28@ghotmail.com'
// }

//El value, es la info lo que cualquier hijo del user provider 
//lo que va a iobtener del userContext,
//se pueden poner cualquier cosa

//Los childrem son todos los ekementos encerrados, dentro del provider

export const UserProvider = ({children}) => {


  const [user, setUser] = useState();


  

  return (
    <UserContext.Provider value={{user,setUser}}  >
        {children}
    </UserContext.Provider>
  )
}
