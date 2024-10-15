import {useState} from 'react'
export function TodoInput(props){
    const {addNewTodo}=props
    const [inputValue,setInputValue]=useState('')
 
    
    return(
        <div className="input-container">
            <input placeholder="Add Task" value={inputValue} 
            onChange={(e)=>{setInputValue(e.target.value)}}/>
            <button onClick={()=>{
                if(!inputValue){ return }
                addNewTodo(inputValue)
                setInputValue('')
            }}>
            <i className="fa-regular fa-plus"></i>
            </button>
        </div>
    )
}