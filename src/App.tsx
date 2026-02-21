import { useState } from 'react'
import  { TaskList } from './components/TaskList/TaskList'
import type { Task, TaskStatus } from './types'
import {TaskFilter} from './components/TaskFilter/TaskFilter'
import './App.css'

const ogTasks: Task[] = [
    {
        id: "AC",
        title: "See Alice Cooper Live",
        description: `"Does this guy know how to party or what?"`,
        status: 'pending',
        priority: 'low',
        dueDate: "November",
    }
,
    {
        id: "GR",
        title: "Refuse Gun Rack",
        description: `"I don't even own ah gun, let alone many guns that would necessitate an entire rack."`,
        status: "completed",
        priority: 'low',
        dueDate: "Yesterday",
    }
,
    {
        id: "GA",
        title: "Play Epic Drum Solo",
        description: `"Thanks. I like to play."`,
        status: "completed",
        priority: 'high',
        dueDate: "Last Month",
    }
,
    {
        id: "DE",
        title: "Visit Delaware",
        description: `"Hi. I'm in...Delaware"`,
        status: "in-progress",
        priority: 'low',
        dueDate: "2027",
    }
,
    {
        id: "WC",
        title: "Buy Excalibur",
        description: `"No Stairway!"`,
        status: "in-progress",
        priority:'high',
        dueDate: "ASAP",
    }
,
    {
        id: "BR",
        title: "Road Trip",
        description: `"If you're gonna spew, spew into this."`,
        status: "pending",
        priority: 'medium',
        dueDate:"Tonight",
    }
]

function App() {
  
const [tasks, setTasks] = useState(ogTasks);

const [filterState, setFilterState] = useState({
    status: "",
    priority: ""
});
  
function handleStatusChange (taskId:string, newStatus:TaskStatus) {
    setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? {...task, status: newStatus } : task));
};

// setMyArray(prevArray => prevArray.map(item => item.id === itemIdToUpdate ? { ...item, property: newValue } : item))

function handleDelete (taskId:string) {
    setTasks((prevTask) => 
    prevTask.filter(tasks => tasks.id !== taskId)
    );
}

function handleFilterChange (filters: {status?: TaskStatus, priority?: 'low' | 'medium' | 'high'}) {  
    setFilterState((prevFilterState) => {
        return { ...prevFilterState, ...filters };
    });
};

const filteredTasks = tasks.filter(task => {
    const includesStatus = filterState.status === "" || task.status.includes(filterState.status);
    const includesPriority = filterState.priority === "" || task.priority.includes(filterState.priority);
    return includesStatus && includesPriority;
});

// let result = FRUITS.filter(fruit => fruit.toLowerCase().includes(debouncedQuery.toLowerCase()))


    return (
        <>
        <h1>TASK LIST</h1>
        <TaskFilter onFilterChange={handleFilterChange}></TaskFilter>
        <TaskList tasks={filteredTasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
        </>
    );
};

export default App
