import { useEffect, useReducer } from "react";
import { TodoReducer } from "../08-useReducer/TodoReducer";


const initialState = [];

//el init es el que se encargar de inicializar todo 
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) 
}



export const useTodo = () => {
  

    //in itial state, el primer argumento es el reducer solo se pasa la referencia, 
// el segundo es el estado inicial 


//el primer argumento del arreglo, es el estado, y el segundo
//el dispatch, despacha los cambios del estado

  const [todos, dispatch] = useReducer(TodoReducer, initialState,init)
  
  useEffect(() => {
    
    localStorage.setItem('todos', JSON.stringify(todos))
    
  }, [todos])



  const handleNewTodo = (todo) => {
    const action = {
      type : '[TODO] Add Todo',
      payload : todo,
    }
    
    dispatch(action )  //es la funcion para madnar la accion

   // console.log({todo})
  }


  const handleDeleteTodo = (id) => {

      dispatch({
        type: '[TODO] Remove Todo',
        payload: id,
      })
  }

  const handleToggleTodo = (id) => {
      dispatch({
        type: '[TODO] Toggle Todo',
        payload: id,
      })
  }



  
 return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    todosCount: todos.length
  }
}
