import React from "react"

export const ShowIncrement = React.memo(({increment}) => {
  
  console.log('Me volví a generar :(')
    return (
    <button
      className="btn btn-primary"
      onClick={() => {increment(5) }}
    >
      Increment
    </button>

)
}
)
//Se debe usar memo junto con useCallback para que funcione correctamente
//memom no sirve, porque la funcino esta ubicada en una localidad 
//de memoria, le mandamos una prop Diferente cada vez, por eso no lo puede memorizar 

