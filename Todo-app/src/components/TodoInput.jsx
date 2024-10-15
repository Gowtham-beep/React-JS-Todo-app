export function TodoInput(){
    return(
        <div className="input-container">
            <input placeholder="Add Task"/>
            <button>
            {/* <h4>ADD</h4> */}
            <i className="fa-regular fa-plus"></i>
            </button>
        </div>
    )
}