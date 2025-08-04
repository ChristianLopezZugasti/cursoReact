import { TodoItem } from "./TodoItem"

export const TodoList = ({todos=[],onDeleteTodo,onToggleTodo}) => {
  
  
  //estamos pasando nuevamente la funcion onDeletetodo al hijo
  
  return (
    <ul className="list-group">
              {
                todos.map(todo => (
                  //TodoItem ...
                    <TodoItem key={todo.id} todo={todo}
                     onDeleteTodo={id => onDeleteTodo(id)}
                     onToggleTodo={id=>onToggleTodo(id)} />
                ) )
              }
              
              
    </ul>
  )
}
