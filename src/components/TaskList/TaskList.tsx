import type { TaskListProps } from '../../types'
import TaskItem from '../TaskItem/TaskItem'
import { TaskFilterProps } from '../../types';
import { onFilterChange } from '../TaskFilter/TaskFilter'
import { useState } from 'react';
import { ogTasks } from '../../data'

// const [selectedStatus, setSelectedValue] = useState<string>('Pending'); // Default value
// const [selectedPriority, setSelectedValue] = useState<string>('Low'); // Default value

// let property = e.target.value


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

    <TaskList (newArray)/>

    return (
        <form>
            <label htmlFor="status">Choose an option:</label>
            <select id="status" value={filters.status} onChange={handleFilterChange}>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="inProgress">In-Progress</option>
                <option value="allS">All Statuses</option>
            </select>
            <p>Selected: {filters.status}</p>
            <label htmlFor="priority">Choose an option:</label>
            <select id="priority" value={filters.priority} onChange={handleFilterChange}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="allP">All Priorities</option>
            </select>
            <p>Selected: {filters.priority}</p>
        </form>
    );
};

// const filt = {e => setStatus(e.target.value)};



export function TaskList ( {tasks, onStatusChange, onDelete}: TaskListProps) {
// format each array of Task items into the structure defined in TaskItem
    const list = tasks.map((task) => {
        return (
            <li>
            <TaskItem key={task.id} task={task} onStatusChange={onStatusChange} onDelete={onDelete}/>
            </li>
        )
    })
// display the formatted array
    return (
        <ul>
            {list}
        </ul>
    )
}

// HELP: I don't understand why these props?

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