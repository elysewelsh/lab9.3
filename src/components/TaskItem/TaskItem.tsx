import type { TaskItemProps, TaskStatus } from "../../types";


function TaskItem({task, onStatusChange, onDelete}: TaskItemProps) {
// when dropdown changed, event passed as parameter to use value of target clicked to send to function to update specific task with that new status
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// new status picked from dropdown and has to be of TaskStatus type
        const newStatus = (event.target.value) as TaskStatus;
// call onStatusChange with parameters it requested
        onStatusChange(task.id, newStatus);
    };
// when clicked, passing id of clicked task to onDelete function
    const handleDelete = () => {
        onDelete(task.id);
    };
    return (
        <div>
            <div>
                <div>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <div>
                        <p>{task.priority}</p>
                        <p>{task.dueDate}</p>
                    </div>
                </div>
                <select onChange={handleStatusChange}>
                    <option>Completed</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                </select>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};
export default TaskItem;

function onStatusChange (taskId, newStatus) {
    {taskId = tasks.task.id? update tasks.task.status to newStatus}
}

function onDelete (taskId) {
    {taskId = tasks.task.id? delete that one from array}
}

// HELP: 
// --I don't understand how the options get sent to the functions.
// --Where are all these arrays stored?
// --Are tje onStatusChange and onDelete supposed to live here? This seems busy.


// REFERENCES:
// from documentation: https://react.dev/reference/react-dom/components/common#common-props : 
// onSelect: An Event handler function. Fires after the selection inside an editable element like an input changes. React extends the onSelect event to work for contentEditable={true} elements as well. In addition, React extends it to fire for empty selection and on edits (which may affect the selection).

// used from Lesson 5 :
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