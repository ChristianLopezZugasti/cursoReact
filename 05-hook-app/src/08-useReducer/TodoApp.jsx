import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"


export const TodoApp = () => {
  
  const {todos,todosCount, pendingTodosCount,handleDeleteTodo,handleNewTodo,handleToggleTodo } = useTodo()

  return (
    <>
    <h1> todoApp : {todosCount} <small> Pendientes: {pendingTodosCount} </small> </h1>
    <hr/>
    
    <div className="row"> 
        <div className="col-7">
           { (todos.length === 0 ) ? (<h1>Sin todos </h1>) : null }
            <TodoList  
                todos={todos}  
                onDeleteTodo= { handleDeleteTodo} 
                onToggleTodo={handleToggleTodo} />

        </div>

        <div className="col-5">

          <h4> Agregar TODO</h4>
          <hr/>
          {/*TodoAdd onNewTodo(todo) */ }
          <TodoAdd  onNewTodo={handleNewTodo}  />

        </div>
    </div>

    
    </>
)
}
