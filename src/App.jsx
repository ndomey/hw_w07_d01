import React, { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" }
  ])

  const [newTask, setNewTask] = useState("")
  const [taskPriority, setNewPriority] = useState("")

  const taskList = tasks.map((task, index) => {
    return(
      <li key={index}>
        <span>{task.name}</span>
      </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const handleNewPriority = () => {
    setNewPriority(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault()
    const copyTasks = [... tasks]
    copyTasks.push({name: newTask, priority: taskPriority})
    setTasks(copyTasks)
    setNewTask("")
  }

  const checkButton = () => {    
    if(document.getElementById('high').checked) {   
        document.getElementById("disp").innerHTML   
            = document.getElementById("high").value      
    }   
    else if(document.getElementById('low').checked) {   
        document.getElementById("disp").innerHTML   
            = document.getElementById("low").value       
    }   
 
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
        <input type="radio" name="priority" id="high" value="high" onChange={handleNewPriority} />High
        <input type="radio" name="priority" id="low" value="low" onChange={handleNewPriority} />Low<br/>
        <input type='submit' value='Save New Task'/>
      </form>
    </>
  )

}

export default App
