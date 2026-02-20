import { useState } from 'react'
import  { TaskList } from './components/TaskList/TaskList'
// import { onFilterChange, TaskFilter } from './components/TaskFilter/TaskFilter'
import type { Task, TaskFilterProps, TaskStatus } from './types'
import {TaskFilter} from './components/TaskFilter/TaskFilter'
import type { IFilterProp } from './types'
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
    const [filterState, setFilterState] = useState({
      status: "",
      priority: ""
    });
  
function handleStatusChange (taskId:string, newStatus:TaskStatus) {
    console.log(taskId,newStatus);
}

function handleDelete (taskId:string) {
        setTasks((prevTask) => 
        prevTask.filter(tasks => tasks.id !== taskId)
       );
}
function handleFilterChange (filters: {status?: TaskStatus, priority?: string}): void {  
  setFilterState((prevFilterState) => {
        return { ...prevFilterState, ...filters };
  })
};

const filteredTasks = tasks.filter((task) => {
    return (
      ((filterState.status === "") || ( task.status === filterState.status))
      &&
      ((filterState.priority === "") || (task.priority === filterState.priority))
    );
});

  return (
    <>
    <TaskFilter onFilterChange={handleFilterChange}></TaskFilter>
    <TaskList tasks={tasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
    </>
  )
}

export default App
