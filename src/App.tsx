import { useState } from 'react'
import  { TaskList } from './components/TaskList/TaskList'
// import { onFilterChange, TaskFilter } from './components/TaskFilter/TaskFilter'
import type { Task } from './types'
// import {handleStatusChange, handleDelete } from './components/TaskItem/TaskItem'
import './App.css'
// import { TaskItem } from './components/TaskItem/TaskItem'

const ogTasks: Task[] = [
{
  id: "AC",
  title: "See Alice Cooper Live",
  description: "Does this guy know how to party or what?",
  status: "pending",
  priority: 'low',
  dueDate: "November",
}
,
{
  id: "GR",
  title: "Refuse Gun Rack",
  description: "I don't even own ah gun, let alone many guns that would necessitate an entire rack.",
  status: "completed",
  priority: 'low',
  dueDate: "Yesterday",
}
,
{
  id: "GA",
  title: "Play Epic Drum Solo",
  description: "Thanks. I like to play.",
  status: "completed",
  priority: 'high',
  dueDate: "Last Month",
}
,
{
  id: "DE",
  title: "Visit Delaware",
  description: "Hi. I'm in...Delaware",
  status: "in-progress",
  priority: 'low',
  dueDate: "2027",
}
,
{
  id: "WC",
  title: "Buy Excalibur",
  description: "No stairway!",
  status: "in-progress",
  priority:'high',
  dueDate: "ASAP",
}
,
{
  id: "BR",
  title: "Road Trip",
  description: "If you're gonna spew, spew into this.",
  status: "pending",
  priority: 'medium',
  dueDate:"Tonight",
}
]

function App() {
    // const [status, setStatus] = useState('All');
    // const [priority, setPriority] = useState('All');


    
const [tasks, setTasks] = useState(ogTasks);
  
function handleStatusChange (taskId:any, newStatus:any) {
    // {taskId = tasks.task.id? update tasks.task.status to newStatus}
    console.log(taskId,newStatus);
}

function handleDelete (taskId:any) {
    // {taskId = tasks.task.id? delete that one from array}
       setTasks((prevTask) => 
          prevTask.filter(tasks => tasks.id !== taskId)
       );
}




  return (
    <>
    <TaskList tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
    </>
  )
}

export default App
