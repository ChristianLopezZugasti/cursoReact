import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue ] = useState('')

    const onInputChanged = ({target}) => {
    
        setInputValue(target.value)
    }

    //Con este metodo, estamos haciendo el cambio en el hijo, pasando
    //el setCategories como prop
    const onSubmit = (event) => {
        event.preventDefault() //para evitar la propagacion
        if(!inputValue.trim())  return 
        //setCategories( (c) => [...c,inputValue]  )
        onNewCategory(inputValue) //emision de eventos 
        setInputValue('')
    }

    return (
        <>
          
            <form  onSubmit={(event) => onSubmit(event) } > 
                <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                //onChange={(e) => onInputChanged(e)}
                onChange={onInputChanged} //es lo mismo cuando llamamos una funcion, es el mismo de la funcion que quiero ejecutar

                />
            </form>
            
        
        </>
    )

}