export function Header(props){
    const {todos}=props
    const isTodoPlural= todos.length!=1
    const taskOrtasks= isTodoPlural? 'tasks':'task'
    
    return(
        <header>
            <h1 className='text-gradient'>You have {todos.length} open {taskOrtasks}.</h1>
        </header>
    )
}