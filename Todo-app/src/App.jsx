import { useState,useEffect } from 'react'
import {Header} from './components/Header'
import {Tabs} from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'

function App() {
   const [todos,setTodos]=useState([])
   const [selectedTabs,setSelectedTabs]=useState('Open')

   function saveTodo(currentTodos){
    localStorage.setItem('Todo-app',JSON.stringify({todos:currentTodos}))
   }

   function addNewTodo(newTodo){
    const newTodoList=[...todos,{input:newTodo,completed:false}]
    setTodos(newTodoList)
    saveTodo(newTodoList)
   }

   function completeTodo(todoIndex){
    let newTodoList=[...todos]
    let completedTodo=todos[todoIndex]
    completedTodo['completed']=true
    newTodoList[todoIndex]=completedTodo
    setTodos(newTodoList)
    saveTodo(newTodoList)
  }

   function deleteTodo(todoIndex){
    let newTodoList=todos.filter((val,valIndex)=>{
      return valIndex!==todoIndex
    })
    setTodos(newTodoList)
    saveTodo(newTodoList)
   }


   useEffect(()=>{
    if(!localStorage || !localStorage.getItem('Todo-app')){return}
    let db=JSON.parse(localStorage.getItem('Todo-app'))
    setTodos(db.todos)
   },[])
   


  return (
   <>
    <Header todos={todos}/>
    <Tabs todos={todos} selectedTabs={selectedTabs} setSelectedTabs={setSelectedTabs} />
    <TodoList todos={todos} selectedTabs={selectedTabs} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    <TodoInput addNewTodo={addNewTodo}/>
   </>
  )
}

export default App
