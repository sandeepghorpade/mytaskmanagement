import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend' 
import CreateTask from './components/CreateTask'
import ListTask from './components/ListTask'

function App() {
 const [tasks, setTasks] = useState([])

  useEffect( () => {
setTasks(JSON.parse(localStorage.getItem('tasks')))

  },[]) 
console.log("tasks", tasks)
  return (

<DndProvider backend={HTML5Backend}>
<Toaster/>
  <div className='bg-slate-800 w-full h-screen flex flex-col items-center p-3 gap-10 pt-10'>
    <h1 className='text-4xl uppercase font-bold text-white'>Task Managment</h1>
<CreateTask tasks={tasks} setTasks={setTasks}/>
<ListTask tasks={tasks} setTasks={setTasks}/>

  </div>    
  </DndProvider> 

  )
}

export default App
