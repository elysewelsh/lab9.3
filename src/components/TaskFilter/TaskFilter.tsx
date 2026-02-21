import type { TaskFilterProps, TaskStatus} from "../../types"

export function TaskFilter ({onFilterChange}: TaskFilterProps) {
// returns dropdown menus for filtering tasks with appropriate callback functions and props
    return (
        <form>
            <label htmlFor="status">Choose an option:</label>
            <select id="status" onChange={(e) => {
                let statusValue: any = e.target.value;
                statusValue === ""? (statusValue = "") : (statusValue as TaskStatus);
                onFilterChange({status: statusValue});
            }}>
                <option value="">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In-Progress</option>
            </select>

            <label htmlFor="priority">Choose an option:</label>
            <select id="priority" onChange={(e) => {
              let priorityValue: any = e.target.value;
              priorityValue === ""? (priorityValue = "") : (priorityValue as 'low' | 'medium' | 'high');
              onFilterChange({priority: priorityValue});
            }}>
                <option value="">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </form>
    );
};

// REFERENCES:

// From using Select and onChange: https://www.delftstack.com/howto/react/react-select-onchange/
// If time allows, will use this to make re-usable status dropdown based on TaskStatus