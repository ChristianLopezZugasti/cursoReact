export const TodoReducer = (initialState, action ) => {


    switch (action.type) {
        case '[TODO] Add Todo':
            
            return  [...initialState, action.payload]
            
        case '[TODO] Remove Todo':
             //filter regresa un nuevo arreglo, no lo estamos mutando a diferencia 
             //de push
            return initialState.filter(todo => todo.id != action.payload )
        case '[TODO] Toggle Todo':
            return initialState.map(todo => { 
                if( todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                console.log(todo)
                return todo;
              } )
            
    
        default:
            return initialState
    }
}