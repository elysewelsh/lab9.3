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

// useState set-up
    const [tasks, setTasks] = useState(ogTasks);
    const [filterState, setFilterState] = useState({
        status: "",
        priority: ""
    });
  
// receives task.id and newly-selected status from TaskItem -> TaskList and updates the state of tasks array with new information
    function handleStatusChange (taskId:string, newStatus:TaskStatus) {
        setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? {...task, status: newStatus } : task));
    };

// receives task.id from TaskItem -> TaskList and updates the state of tasks array to a filtered version where none of the task.ids match the deleted task.id
    function handleDelete (taskId:string) {
        setTasks((prevTask) => prevTask.filter(tasks => tasks.id !== taskId));
    }

// receives newly-selected filters (status &&/|| priority) from TaskFilter and returns updated state of filters
    function handleFilterChange (filters: {status?: TaskStatus, priority?: 'low' | 'medium' | 'high'}) {  
        setFilterState((prevFilterState) => {return { ...prevFilterState, ...filters };});
    };

// creates filtered tasks array where filter properties (held in filterState) are compared to task properties from tasks array
    const filteredTasks = tasks.filter(task => {
        const includesStatus = filterState.status === "" || task.status.includes(filterState.status);
        const includesPriority = filterState.priority === "" || task.priority.includes(filterState.priority);
        return includesStatus && includesPriority;
    });


    return (
        <>
        <h1>TASK LIST</h1>
        <TaskFilter onFilterChange={handleFilterChange}></TaskFilter>
        <TaskList tasks={filteredTasks} onStatusChange={handleStatusChange} onDelete={handleDelete} />
        </>
    );
};

export default App


// REFERENCES:

// To filter array on multiple properties: https://www.geeksforgeeks.org/reactjs/how-to-implement-multiple-filters-in-react/

// From Lesson 2 activity in Module 10:
// let result = FRUITS.filter(fruit => fruit.toLowerCase().includes(debouncedQuery.toLowerCase()))

// From Immutability lesson in Module 9:
// setMyArray(prevArray => prevArray.map(item => item.id === itemIdToUpdate ? { ...item, property: newValue } : item))

// From Module 9, Lesson 5 :
//   const [username, setUsername] = useState('');
//   const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setUsername(event.target.value);
//   };
//   // Handler for the form's onSubmit event
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     // Prevent the default form submission (which causes a page reload)
//     event.preventDefault();
//     // Now you can handle the submission logic in JavaScript
//     alert(`Submitting username: ${username}`);
//     // In a real app, you might send 'username' to an API here
//     setUsername(''); // Optionally clear the input after submission
//   };
//   return (
//     // Attach the handler to the form's onSubmit event
//     <form onSubmit={handleSubmit}>
//       <h2>Simple Form</h2>
//       <div>
//         <label htmlFor="username">Username: </label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={handleUsernameChange}
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default SimpleForm;

