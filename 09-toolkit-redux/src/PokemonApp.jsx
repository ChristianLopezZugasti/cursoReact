import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from "./store/slices/pokemon/thunks"
export const PokemonApp = () => {


  const dispatch = useDispatch()

  useEffect(() => {
      dispatch( getPokemons()); //la accion va a ser el thunk

  }, [])
  

  const {pokemons =[],isLoading,page} = useSelector((state) => state.pokemon )

 





  return (
    <>
    <h1> PokemonApp </h1>
    <hr/>
    <span>Loading : { isLoading ? 'true' : 'false'} </span>
    <ul>
      { 
        pokemons.map( ({name}) => 
        ( <li key={name} > {name} </li>)
        )
      }
      <li> pepe</li>
    </ul>

    <button 
    onClick={() => dispatch(getPokemons(page)) }
     >
        Next
    </button>
  
    </>
  )   
}
