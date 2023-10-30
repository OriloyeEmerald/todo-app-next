"use client";

import Header from "@/components/header";
import TasksBar from "@/components/tasksBar";
import { useState } from "react";


export default function Home() {
  const [inputTask, setInputTask] = useState('')
  const [todos, setTodos] = useState([])
  const [toggleState, setToggleState] = useState(true)

  const handleInput = (e) => {
    setInputTask(e.target.value)
  }



const addTask = () => {
  const newTask = {
    id:todos.length === 0 ? 1 : todos[todos.length -1].id + 1,
    taskName: inputTask,
    completed:false
 }
  
   if(newTask.taskName.length > 0) {
    setTodos([...todos, newTask])
    setInputTask('')
   }

}

 const deleteTask = (id) => { 
   const updatedTodos = todos.filter((todo) => todo.id !== id);

   setTodos(updatedTodos)
}

const completeTask = (id) => {
  const updatedTodo = todos.map((todo) => {
    if(todo.id === id) {
      return {...todo, completed: true}
    }
    return todo
  })
   setTodos(updatedTodo)
}
  return (
    <main className={toggleState ? 'bg-[#fafafa]' : 'bg-[#171823]'}>
        <Header 
         inputTask = {inputTask}
         handleInput = {handleInput}
         toggleState = {toggleState}
         setToggleState = {setToggleState}
        />        
        <TasksBar 
         todos={todos}
         addTask = {addTask}
         deleteTask={deleteTask}
         completeTask={completeTask}
         setTodos={setTodos}
         toggleState={toggleState}
        />
    
    </main>
  )
}
