export function TodoCard(props){
    const {todo,deleteTodo,todoIndex,completeTodo}=props
    
    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-button">
                <button disabled={todo.completed}
                    onClick={()=>{
                        completeTodo(todoIndex)
                    }}
                >Done</button>
                <button onClick={()=>{
                    deleteTodo(todoIndex)
                }}>Delete</button>
            </div>
        </div>
    )
}