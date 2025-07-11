//custom hooks

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
  
    const [images,setImages] = useState([])
    const [isLoading,setIsLoading] = useState(true)
        
        //cuando pase algo, disparo un efecto, cuando el componente se carga por primera vez
        // el primer parametro es una funcion
        //El segundo, es la lista de parametros, si esta vacia solo se ejecuta cuando se carga por primera vez
        //el componente
        useEffect( ()=>{
            setIsLoading(true)
            getGifs(category)
            .then((response) => {
                setImages(response)
            }
            )
            .finally(
                setIsLoading(false)
            )
        }, [])




 return {
    images: images,
    isLoading: isLoading
 }
}
