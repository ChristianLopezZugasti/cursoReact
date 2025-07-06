//Lo que esta agrupando al h1 y p, es un fragmento
//porque se debe retornar un nodo padre.

//dentro de {} se ponene expresiones de javascript,
//no objetos

//No se puede mandar el objeto tal cual
const newMessage = {
    message: 'Hola mundi',
    pepe: 2
}
    
const getResult = () => {

    return 2+2
}


export const FirstdApp = ({title,subtitle,name}) => {

    
    return(
        <>   
            {getResult() }
            {/* <h1> {  JSON.stringify(  newMessage) } </h1> */}
            <p> Soy un subititulo</p>    
        </>
        
    )
}

