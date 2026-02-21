import type { TaskItemProps, TaskStatus } from "../../types";

function TaskItem({task, onStatusChange, onDelete}: TaskItemProps) {
const priorityStyles = {
    low: "text-green-500",
    medium: "text-amber-500",
    high: "text-red-500"
}
// returns formatted individual task
    return (
        <div className="text-white">
            <div className="flex flex-row m-5 border-1 rounded-lg p-5 gap-5 justify-between bg-gray-700" id="orange">
                <div className="flex flex-col gap-2 justify-start" id="green">
                    <h2 className="text-2xl font-bold">{task.title}</h2>
                    <p>{task.description}</p>
                    <div className="flex flex-row gap-5 text-lg" id="pink">
                        <p>Priority: <span className={priorityStyles[task.priority]}>{task.priority}</span></p>
                        <p>Due Date: {task.dueDate}</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between" id="purple">
                    <div className="flex flex-row gap-3" id="yellow">
                        <p>Status: </p>
                        <select className="border-1 bg-gray-800 rounded-sm cursor-pointer transition-all duration-[250ms] ease-in-out hover:border-[#3182ce] focus:outline-none" value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}>
                            <option value="completed">Completed</option>
                            <option value="pending">Pending</option>
                            <option value="in-progress">In Progress</option>
                        </select>
                    </div>
                    <button className="rounded border-2 border-transparent px-8 py-4 text-lg font-semibold bg-gray-800 cursor-pointer transition-all duration-[250ms] ease-in-out hover:border-[#3182ce] focus:outline-none focus:ring-2 focus:ring-[#3182ce]" onClick={() => onDelete(task.id)}>Delete</button>
                    </div>
            </div>
        </div>
    );
};
export default TaskItem;


// REFERENCES:

// React documentation: https://react.dev/reference/react-dom/components/common#common-props

// Tailwind documentation: https://tailwindcss.com/docs/installation/using-vite

// using Select and onChange: https://www.delftstack.com/howto/react/react-select-onchange/

// Lab 9.1 Alert Box/Conditional Rendering: https://perscholas.instructure.com/courses/3086/assignments/599668

// Translated index.css into Tailwind for button (and referenced this: https://stackoverflow.com/questions/7538771/what-is-webkit-focus-ring-color) and stole styling for dropdowns too :
// button {
//   border-radius: 8px;
//   border: 1px solid transparent;
//   padding: 0.6em 1.2em;
//   font-size: 1em;
//   font-weight: 500;
//   font-family: inherit;
//   background-color: #1a1a1a;
//   cursor: pointer;
//   transition: border-color 0.25s;
// }
// button:hover {
//   border-color: #646cff;
// }
// button:focus,
// button:focus-visible {
//   outline: 4px auto -webkit-focus-ring-color;
// }