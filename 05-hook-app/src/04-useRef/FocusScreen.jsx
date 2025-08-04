import { useRef } from "react";

export const FocusScreen = () => {
  
const inputRef = useRef() //mantiene referencia a un elemento del dom, si cambia, no se vueleve a renderizar




  const onclick = () => {
    //document.querySelector('input').select();
    console.log(inputRef)
    inputRef.current.select(); //selecciona el input
    }
  
    return (
        <>
        <h1>Focus Screen</h1>
        <hr />

        <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Ingrese su nombre"

        />

        <input
            type="text"
            className="form-control"
            placeholder="Ingrese su nombre"

        />

        <button className="btn btn-outline-primary mt-2"
            onClick={onclick}
            >
            Set Focus
        </button>

        </>
    )
}
