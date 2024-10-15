import { useState } from 'react'
import {Header} from './components/Header'
import {Tabs} from './components/Tabs'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'



function App() {
   const todos=[
    {input:'Go to gym',completed:true},
    {input:'Go to gym',completed:true},
    {input:'Go to gym',completed:false},
    {input:'Go to gym',completed:false},
   ]
  return (
   <>
    <Header todos={todos}/>
    <Tabs todos={todos}/>
    <TodoList todos={todos}/>
    <TodoInput/>
   </>
  )
}

export default App
