import type { TaskItemProps, TaskStatus } from "../../types";

function TaskItem({task, onStatusChange, onDelete}: TaskItemProps) {
// returns formatted individual task
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

// React documentation: https://react.dev/reference/react-dom/components/common#common-props

// using Select and onChange: https://www.delftstack.com/howto/react/react-select-onchange/