import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"



const heavyStuff = ( iterationNumber = 100 ) => {

  for(let i = 0 ; i< iterationNumber; i++){
    console.log('Ahí vamos...')
  }

  return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {
  
  const {counter,increment} =  useCounter(4000)
  const [show, setshow] = useState(true)
  
  // memoriza lo que sea que retorna, y se va a manener a menos que las dependencias del memo cambieb
  //lo va a reprocesar si las dependencias cambian, cada vez que el valor de counter cambien
  const memorizedvalue =  useMemo(()=> heavyStuff(counter) , [counter])
  
  return (

    <>
        <h1>Counter:  <small>{counter} </small> </h1>
        <hr/>

        <h4>{memorizedvalue}</h4>

        <button className="btn btn-primary" onClick={() => increment()}>
            +1
        </button>

        <button className="btn btn-outline-primary" onClick={() => setshow(!show)}>
            Show/Hide {JSON.stringify(show)}
        </button>
    
    
    </>
  )
}
