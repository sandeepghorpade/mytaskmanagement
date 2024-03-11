import React, { useEffect, useState } from 'react'
import Section from './Section'

const ListTask = ({ tasks, setTasks}) => {
  const[todos, setTodos]=useState([])
  const[started, setStarted]=useState([])
  const[completed, setCompleted]=useState([])
  
  useEffect(()=>{
      const fTodos = tasks.filter((tasks) =>  tasks.status === "todo")
      const fStarted = tasks.filter((tasks) =>  tasks.status === "started")
      const fCompleted = tasks.filter((tasks) =>  tasks.status === "completed")

      setTodos(fTodos)
      setStarted(fStarted)
      setCompleted(fCompleted)
 },[tasks])

 const statuses = ["todo","started","completed"]

  return (
    <div className='flex gap-10'>
        {statuses.map((status ,index) => (<Section 
        key={index} 
        status={status}
        setTasks={setTasks} 
        tasks={tasks} 
        todos={todos} 
        started={started} 
        completed={completed}
         />))}

    </div>
  )
}

export default ListTask