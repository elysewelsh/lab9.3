import type { TaskFilterProps, TaskStatus} from "../../types"

// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }

export function TaskFilter ({onFilterChange}: TaskFilterProps) {
return (
          <form>
            <label htmlFor="status">Choose an option:</label>
            <select id="status" onChange={(e) => {onFilterChange({status: e.target.value as TaskStatus});}}>
                <option value="">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="inProgress">In-Progress</option>
            </select>

            <label htmlFor="priority">Choose an option:</label>
            <select id="priority" onChange={(e) => {
              let priorityValue: any = e.target.value;
              priorityValue === ""? (priorityValue = undefined) : (priorityValue as 'low' | 'medium' | 'high');
              onFilterChange({priority: priorityValue});}}>
                <option value="">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </form>
);
}
    // const completedTasks: Task[] = tasks.filter(task => task.status === "completed");
    // const inProgressTasks: Task[] = tasks.filter(task => task.status === "in-progress");
    // const pendingTasks: Task[] = tasks.filter(task => task.status === "pending");
    // const lowTasks: Task[] = tasks.filter(task => task.priority === "low");
    // const mediumTasks: Task[] = tasks.filter(task => task.priority === "medium");
    // const highTasks: Task[] = tasks.filter(task => task.priority === "high");

    // switch (filt) {  
    //     case filt = "Completed":
    //         return completedTasks;
    //     case filt = "In-Progress":
    //         return inProgressTasks;
    //     case filt = "Pending":
    //         return pendingTasks;
    //     case filt = "Low":
    //         return lowTasks;
    //     case filt = "Medium":
    //         return mediumTasks;
    //     case filt = "High":
    //         return highTasks;
    // };



// const setFilter: React.FC = () => {
//     const [selectedStatus, setSelectedValue] = useState<string>('Pending'); // Default value
//     const [selectedPriority, setSelectedValue] = useState<string>('Low'); // Default value

//     const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         let property = event.target.value;
//         setSelectedValue({...prevProperty, [property]);
//     };
 
//   return (
//     <TaskList (newArray)>
//     </TaskList>
//   );
// };
// }


// export function TaskFilter ({onFilterChange}:TaskFilterProps) {
    
//     const handleStatusOption = (e) => {
//         onFilterChange({status: e.target.value});
//     }
//     const handlePriorityOption = (e) => {
//         onFilterChange({priority: e.target.value});
//     }
//         return (
//             <div>
//                 <TaskList tasks={onFilterChange}></TaskList>
//             </div>
//             ) 
// };

// export function TaskFilter ({onFilterChange}:TaskFilterProps) {
      
// };


// used from documentation: https://react.dev/learn/rendering-lists
// const chemists = people.filter(person =>
//   person.profession === 'chemist'

//   const listItems = chemists.map(person =>
//   <li>
//      <img
//        src={getImageUrl(person)}
//        alt={person.name}
//      />
//      <p>
//        <b>{person.name}:</b>
//        {' ' + person.profession + ' '}
//        known for {person.accomplishment}
//      </p>
//   </li>
// );
// return <ul>{listItems}</ul>;

// );



// export function TaskFilter ({onFilterChange: {status?: , priority?: }:TaskFilterProps}) {
// // let newList: Task[] = onFilterChange;
// //     const taskRender = {onFilterChange}.map((task) => {
// //     return (
// //         <TaskItem task={task}/>
// //     )
// // })
// onFilterChange
// return (
//     <>
//     <TaskList {onFilterChange}/>
//     </>
// )
// }

// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }


// const dataArray = [item1, item2, item3];
 
// const jsxElements = dataArray.map((itemData) => {
//   // For each item in dataArray, return a JSX element
//   return <MyComponent data={itemData} />;
// });
 
// // Now, jsxElements is an array like:
// // [<MyComponent data={item1} />, <MyComponent data={item2} />, <MyComponent data={item3} />]
 
// // You can render this array directly inside JSX:
// return <ul>{jsxElements}</ul>;