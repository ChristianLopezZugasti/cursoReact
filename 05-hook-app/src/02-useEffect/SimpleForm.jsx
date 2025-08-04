import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {


    const [formState, setformState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    })

    const { username,email} = formState;


    const onInputChange = ({target}) => {
        const {name,value} = target
        setformState({
            ...formState,
            [name ] : value   //es una prpiedad computada, 
        })        
    }

    //se llama cada vez que se cambia el estado, si no hay ninguna dependencia
    //Las dependencias, son las condiciones cuando el useEffect se va a disparar
    //si esta vacio, solo quiero que el useEffect cuando el componente es montado, 
    useEffect( () => {
       // console.log('formstate changed')
    },[formState]);

    useEffect( () => {
        //console.log('useEffect')
    },[]);

    useEffect( () => {
       // console.log('email changed')
    },[email]);

    

  return (
    <>
        <h1> Formulario Simple </h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={ onInputChange}
        />  




        <input
            type="email"
            className="form-control mt-3 "
            placeholder="Example@google.com"
            name="email"
            value={email}
             onChange={ onInputChange}
        
        />    

        {
            (username === 'strider2') && <Message/>
        }

    </>
    )
}
