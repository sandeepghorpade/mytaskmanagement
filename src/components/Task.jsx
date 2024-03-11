import React, { useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import toast from 'react-hot-toast'


const Task = ({task, tasks, setTasks})=>{


    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item:{id: task.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))

    const handleRemove= (id) =>{
 const fTask = tasks.filter(task  => task.id !== id);
localStorage.setItem("tasks", JSON.stringify(fTask));
 setTasks(fTask)
toast("Task Removed", {icon:"👋"}); 
    }


    return(
        <div ref={drag} className={`relative p-4 mt-4 shadow-md rounded-md cursor-grab ${ isDragging ? "opacity-25": "opacity-100"}`}>
<p>{task.name}</p>

<button className='absolute bottom-3 right-1 text-slate-400' onClick={() => handleRemove(task.id)}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

</button>
</div>    
    )
   }

export default Task