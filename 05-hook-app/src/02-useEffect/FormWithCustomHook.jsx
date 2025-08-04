import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

      const { formState, onInputChange,onResetForm,username,email,password } =   useForm({
        username:'',
        email:'',
        password:'',
      })

      
    //const {username,email,password} = formState;
    
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

        <input
            type="password"
            className="form-control mt-3 "
            placeholder="contrasena"
            name="password"
            value={password}
             onChange={ onInputChange}
        
        />    

        {
            (username === 'strider2') && <Message/>
        }

        <buttom className="btn btn-primary mt-2" onClick={onResetForm } >  Reset </buttom>
    </>
    )
}
