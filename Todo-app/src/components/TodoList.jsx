import { TodoCard } from "./TodoCard";

export function TodoList(props){

    const {todos,selectedTabs,deleteTodo,completeTodo}=props

    const filterTodoList= selectedTabs==='All'?
            todos:
            selectedTabs==='Completed'? 
            todos.filter(val=>val.completed):
            todos.filter(val=>!val.completed)
    return(
        <>
        {filterTodoList.map((todo,todoIndex)=>{
            return(
            <TodoCard key={todoIndex} 
                        todoIndex={todos.findIndex(val=>val.input==todo.input)} 
                        todo={todo} 
                        deleteTodo={deleteTodo}
                        completeTodo={completeTodo}
            />
            )
        })}
        </>
    )
}