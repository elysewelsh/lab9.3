import type { TaskItemProps, TaskStatus } from "../../types";

function TaskItem({task, onStatusChange, onDelete}: TaskItemProps) {

    return (
        <div>
            <div>
                <div>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <div>
                        <p>Priority: {task.priority}</p>
                        <p>Due Date: {task.dueDate}</p>
                    </div>
                </div>
                    <div>
                        <p>Status: </p>
                        <select value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                        </select>
                    </div>
                <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
        </div>
    );
};
export default TaskItem;


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