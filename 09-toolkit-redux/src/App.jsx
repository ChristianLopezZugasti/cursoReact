import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement ,incrementBy} from './store/slices/counter/counterSilce'

const  App = () =>{
  const [count, setCount] = useState(0)
  //Tomamos todo el objeto, que se llama counter, y de ahi desestrucutramos lo que queremos
  //que es la propeidad counter
   const { counter} = useSelector((state) => state.counter )

   //y con esto podemos llamar a las funciones
   const dispatch = useDispatch() //ya sabe a que reducer va a usar

  return (
    <>
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <p> count is {counter}</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=>{dispatch(increment())}}>
          Increment
        </button>
        <button onClick={()=>{dispatch(decrement())}}>
          Decrement
        </button>
        <button onClick={()=>{dispatch(incrementBy(2))}}>
          Increment by 2
        </button>

      </div>
      
    </>
  )
}

export default App
