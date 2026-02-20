import type { TaskListProps } from '../../types'
import TaskItem from '../TaskItem/TaskItem'
import { TaskFilterProps } from '../../types';
import { onFilterChange } from '../TaskFilter/TaskFilter'
import { useState } from 'react';
import { ogTasks } from '../../data'
import { IFilterProp } from '../../types'

// const [selectedStatus, setSelectedValue] = useState<string>('Pending'); // Default value
// const [selectedPriority, setSelectedValue] = useState<string>('Low'); // Default value

// let property = e.target.value

// UNCOMMENT FROM HERE TO LINE 58
interface IFilterProp {
    status?: string,
    priority?: string
}

const setFilters: React.FC = () => {
    const [filters,setFilter] = useState<IFilterProp>(
        {
            status: '',
            priority: ''
        }
    );

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        const {id, value} = event.target;
        setFilter((prevFilter: IFilterProp) => ({
            ...prevFilter,
            [id]: value
        }));
        // onFilterChange({filters});
    };

    return (
        <form>
            <label htmlFor="status">Choose an option:</label>
            <select id="status" value={filters.status} onChange={handleFilterChange}>
                <option value="">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="inProgress">In-Progress</option>
            </select>
            <p>Selected: {filters.status}</p>
            <label htmlFor="priority">Choose an option:</label>
            <select id="priority" value={filters.priority} onChange={handleFilterChange}>
                <option value="">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <p>Selected: {filters.priority}</p>
        </form>
    );
};

// const filt = {e => setStatus(e.target.value)};





export function TaskList ( {tasks, onStatusChange, onDelete}: TaskListProps) {
// format each array of Task items into the structure defined in TaskItem
function handleDelete (taskId: any) {
onDelete(taskId);
}; 
function handleStatusChange (taskId:any, taskStatus:any) {
    onStatusChange(taskId, taskStatus);
};
const list = tasks.map((task) => {
        return (
            <li key={task.id}>
            <TaskItem  task={task} onStatusChange={handleStatusChange} onDelete={handleDelete}/>
            </li>
        )
    })
// display the formatted array
    return (
        <>
        hello

        <ul>
            {list}
        </ul>
        </>
    )
}

// HELP: 

// used this from Lab 2:

// function ProductList() {
//   const productElements = products.map((product) => (
//     // Key goes on the outermost element in the map - the <li> here
//     <li key={product.id} style={{ borderBottom: '1px solid #eee', marginBottom: '10px', paddingBottom: '10px' }}>
//         {/* Using the dedicated component */}
//         <ProductItem product={product} />
 
//         {/* Or render directly */}
//         {/* <h3>{product.name}</h3>
//         <p>ID: {product.id}</p>
//         <p>Price: ${product.price}</p> */}
//     </li>
//   ));
 
//   return (
//     <div>
//       <h2>Products</h2>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {productElements}
//       </ul>
//     </div>
//   );
// }
 
// export default ProductList;