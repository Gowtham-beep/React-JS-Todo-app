export function Tabs(props){
    const tabs=['All','Open','Completed']
    const {todos,selectedTabs,setSelectedTabs}=props

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
                        <button onClick={()=>{
                            setSelectedTabs(tab)
                        }}
                        key={tabIndex} className={"tab-button " + (tab===selectedTabs?'tab-selected':'')}>
                            <h4>{tab}<span> {numberOfTasks} </span></h4>
                        </button>
                    )
                })
            }
            <hr/>
        </nav>
    )
}