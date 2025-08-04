import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {
  
  const [counter, setCounter] = useState(10)

  //similar a useMemo, pero memoriza funciones, y regresa funcinoes que pueden ejecutar
  const incrementFather =  useCallback(
    (value) => {
      setCounter((c) => c + value)
    },
    [],
  )
  

  // const incrementFather = () => {
  //   setCounter(counter + 1)
  // }
  
    return (
    <>
        <h1>CallBackHook: {counter}  </h1>
        <hr/>
        <ShowIncrement increment={incrementFather}   />

    </>
)
}
