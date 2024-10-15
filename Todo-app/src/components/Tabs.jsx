export function Tabs(props){
    const tabs=['All','Open','Completed']
    const {todos}=props
    return (
        <nav className="tab-container">
            {
                tabs.map((tab,tabIndex)=>{
                    const numberOfTasks= tab==='All'?
                        todos.length:
                        tab==='Open'?
                        todos.filter(val=>!val.completed).length:
                        todos.filter(val=>val.completed).length
                    return(
                        <button key={tabIndex} className="tab-button">
                            <h4>{tab}<span> {numberOfTasks} </span></h4>
                        </button>
                    )
                })
            }
        </nav>
    )
}