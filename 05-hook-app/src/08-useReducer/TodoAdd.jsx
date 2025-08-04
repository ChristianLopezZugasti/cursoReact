import { useState } from "react"
import { useForm} from '../hooks/useForm'


export const TodoAdd = ({onNewTodo}) => {
 
    
   const {description, onInputChange, onResetForm} = useForm({
        description: '',

   })
   
   
    //Esta bien pero ya tenemos un hook
    // const [inputValue, setInputValue] = useState('')


    //  const onInputChanged = ({target}) => {
    
    //     setInputValue(target.value)
    // }

  
     const onSubmit = (event) => {
         event.preventDefault() 
         if(!description.trim())  return
         
         const newTodo = {
            id: new Date().getTime(),
            done:false,
            description: description,
         }
         
         onNewTodo(newTodo) //emision de eventos 
         onResetForm()
     }
 
    return (
    <>
        <form onSubmit={onSubmit} >
              <input
                type="text"
                placeholder="Que hay que hacer"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
              />

              <button type="submit"
                      className="btn btn-outline-primary mt-1"
              >
                  Agregar
              </button>


    </form>
    </>
    
  )
}
