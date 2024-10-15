export function TodoCard(props){
    const {todo}=props
    
    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-button">
                <button disabled={todo.completed}>Done</button>
                <button>Delete</button>
            </div>
        </div>
    )
}