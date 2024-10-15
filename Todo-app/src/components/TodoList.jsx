import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const {todos}=props
    const tab='Completed'
    const filterTodoList= tab==='All'?
            todos:
            tab==='Completed'? 
            todos.filter(val=>val.completed):
            todos.filter(val=>!val.completed)
    return(
        <>
        {filterTodoList.map((todo,todoIndex)=>{
            return(
            <TodoCard key={todoIndex} todoIndex={todoIndex} todo={todo}/>
            )
        })}
        </>
    )
}