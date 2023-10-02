import React, { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    "Buy shopping", "Clean bathroom", "Car's MOT"
  ])

  const [newTask, setNewTask] = useState("")

  const taskList = tasks.map((task, index) => {
    return(
      <li key={index}>
        <span>{task}</span>
      </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault()
    const copyTasks = [... tasks]
    copyTasks.push(newTask)
    setTasks(copyTasks)
    setNewTask("")
  }

  
  return (
    <>
      <h1>To Do's</h1>
      <ul>
        {taskList}
      </ul>
      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>Add a new task:</label>
        <input id='new-task' type='text' value={newTask} onChange={handleTaskInput}/>
        <input type='submit' value='Save New Task'/>
      </form>
    </>
  )

}

export default App
