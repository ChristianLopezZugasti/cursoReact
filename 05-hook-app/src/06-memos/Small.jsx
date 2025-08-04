

import React from "react"

//memo, le dice que memorice el componente, solo cuando sus props cambien, se volvera a renderizar
//si no cambian, no se volvera a renderizar
export const Small = React.memo(({value}) => {
  
  console.log('Small component rendered')

    return (
    <small>{value} </small>
  )
})

