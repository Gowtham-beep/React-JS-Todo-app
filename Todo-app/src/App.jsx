import { useState } from 'react'
import {Header} from './components/Header'
import {Tabs} from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'

function App() {
   const [todos,setTodos]=useState([
    {input:'Go to gym',completed:true}
   ])
   function addNewTodo(newTodo){
    const newTodoList=[...todos,{input:newTodo,completed:false}]
    setTodos(newTodoList)
   }
   function editTodo(){

   }
   function deleteTodo(){

   }
   
  return (
   <>
    <Header todos={todos}/>
    <Tabs todos={todos}/>
    <TodoList todos={todos}/>
    <TodoInput addNewTodo={addNewTodo}/>
   </>
  )
}

export default App
