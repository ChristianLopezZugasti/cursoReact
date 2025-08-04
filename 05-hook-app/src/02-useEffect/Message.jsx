import { useEffect, useState } from "react"


export const Message = () => {
   
const [coords, setcoords] = useState({x:0,y:0})    

useEffect(() => {

    const onMousemove = ({x,y} ) => {
        setcoords({x,y})
    }
    window.addEventListener('mousemove',onMousemove)
   

  return () => {

    window.removeEventListener('mousemove',onMousemove)


    }
}, [])


  return (
    <>
        <h3>usuario Ya existe </h3>
        {JSON.stringify(coords)}
    </>
  )
}
