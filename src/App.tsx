import { useState } from 'react'
import  { TaskList } from './components/TaskList/TaskList'
import { onFilterChange, TaskFilter } from './components/TaskFilter/TaskFilter'
import type { Task } from './types'
import './App.css'

function App() {
    // const [status, setStatus] = useState('All');
    // const [priority, setPriority] = useState('All');

  






  return (
    <>
    <TaskFilter>
    </TaskFilter>
    <TaskList>
    </TaskList>
    </>
  )
}

export default App
