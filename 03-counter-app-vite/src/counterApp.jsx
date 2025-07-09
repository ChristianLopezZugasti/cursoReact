import {use, useState} from 'react';

 

export const CounterApp = ({value}) => {

    // el argumento es el valor inicial, es cero
    //se desestrucutra lo que retorna la funcion useState


    const [ counter, setCounter  ] = useState(value)


    //cunado se ejecuta el set, se vuelve a renderizar el componente, con los nuevos valores
    //HAY UN CAMBIO EN EL ESTAT DEL COMPONENTE
    const handleAdd = () => {

        //setCounter(counter + 1)
        setCounter( (c) => c+1 )    //el argumento c es el valor actual del counter, 
        // se puede usar para evitar problemas de asincronía
    }

    const handleSubstract = () => {
        setCounter(counter - 1)

     }

    const handleReset = () => {
        setCounter(  value ) //se puede usar el valor inicial que se le paso al componente
    }

    return(
        <>   
            <h1>Counter App</h1>
            <h2> { counter } </h2>
            {/* <h1> {  JSON.stringify(  newMessage) } </h1> */}
            <button onClick={ handleAdd } > +1 </button> 
            <button onClick={ handleSubstract } > -1 </button> 
            <button onClick={ handleReset } > reset </button> 

            
        </>
        
    )
}
