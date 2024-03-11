import React from 'react'
import { useDrag, useDrop } from 'react-dnd'
import toast from 'react-hot-toast'
import Header from './Header'
import Task from './Task';

const Section = ({status, setTasks, tasks, todos, started, completed }) => {

    const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop:(item)=> addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }))


  let text ="Added";
  let bg="bg-slate-500";
  let tasksToMap = todos 
  
  if(status === "started"){
      text="started";
      bg="bg-purple-500"
      tasksToMap = started     
  }
  if(status === "completed"){
      text="completed";
      bg="bg-green-500"
      tasksToMap = completed  
  }    
    
  const addItemToSection = (id) => {
      setTasks(prev => {
  const mTask = prev.map(task => {
      if(task.id === id){
          return {...task, status:status}
      }
  return task
  
  });
  localStorage.setItem("tasks", JSON.stringify(mTask))
  toast("Task Status Changed",{icon:"😊"});
  return mTask    })
  }

  return (
    <div ref={drop}  className={`w-60 rounded-md p-2 border border-gray-200 dark:border-gray-700 bg-white ${isOver ? "bg-slate-200" : ""}`}>  
<Header text={text} bg={bg} count={tasksToMap.length}/>
{tasksToMap.length > 0 && tasksToMap.map( (task) => 
  <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />)}
    </div>
  )
}

export default Section