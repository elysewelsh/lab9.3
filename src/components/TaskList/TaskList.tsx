import type { TaskListProps } from '../../types'
import TaskItem from '../TaskItem/TaskItem'
// import { TaskFilterProps } from '../../types';
// import { onFilterChange } from '../TaskFilter/TaskFilter'
// import { useState } from 'react';
// import { ogTasks } from '../../data'
// import { IFilterProp } from '../../types'

// const [selectedStatus, setSelectedValue] = useState<string>('Pending'); // Default value
// const [selectedPriority, setSelectedValue] = useState<string>('Low'); // Default value

// let property = e.target.value

// UNCOMMENT FROM HERE TO LINE 58
// interface IFilterProp {
//     status?: string,
//     priority?: string
// }

// const setFilters: React.FC = () => {
//     const [filters,setFilter] = useState<IFilterProp>(
//         {
//             status: '',
//             priority: ''
//         }
//     );

//     const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         event.preventDefault();
//         const {id, value} = event.target;
//         setFilter((prevFilter: IFilterProp) => ({
//             ...prevFilter,
//             [id]: value
//         }));
//         // onFilterChange({filters});
//     };

//     return (

//     );
// };

// const filt = {e => setStatus(e.target.value)};





export function TaskList ( {tasks, onStatusChange, onDelete}: TaskListProps) {
// format each array of Task items into the structure defined in TaskItem
// function handleDelete (taskId: any) {
// onDelete(taskId);
// }; 
// function handleStatusChange (taskId:any, taskStatus:any) {
//     onStatusChange(taskId, taskStatus);
// };
const list = tasks.map((task) => {
        return (
            <li key={task.id}>
            <TaskItem  task={task} onStatusChange={onStatusChange} onDelete={onDelete}/>
            </li>
        );
    });
// display the formatted array
    return (
        <>
        TASK LIST
        <ul>
            {list}
        </ul>
        </>
    );
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