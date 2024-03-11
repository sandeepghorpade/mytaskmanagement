import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ tasks, setTasks}) => {

    const [newTask, setNewTask]= useState({
        id:"",
        name:"",
        status:"todo"
    })
    console.log(newTask)

const handleSubmit = (e) => {
    e.preventDefault();   
    if(newTask.name.length < 3) return toast.error("A Task must have more than 3 Characters");
    if(newTask.name.length > 100) return toast.error("A Task must have more than 100 Characters");

    setTasks((prev) => {
   const list = [...prev, newTask]
localStorage.setItem("tasks", JSON.stringify(list)) 
   return list
    })

    toast.success( "New Task Created")

    setNewTask({
        id:"",
        name:"",
        status:"added"
    })

}

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        className='border-2 border-white-400 bg-slate-100 rounded-md mr-4 h-12 w-96  px-1'
        value={newTask.name}
        onChange={(e) => setNewTask({...newTask, id:uuidv4(), name:e.target.value})}
        />

        
        <button className='bg-cyan-500 rounded-md px-4 h-12 text-white '> Create</button>
    </form>
  )
}

export default CreateTask