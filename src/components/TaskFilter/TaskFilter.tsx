import type { TaskFilterProps, TaskStatus} from "../../types"
import type { IFilterProp } from "../TaskList/TaskList"

// export interface TaskFilterProps {
//   onFilterChange: (filters: {
//     status?: TaskStatus;
//     priority?: 'low' | 'medium' | 'high';
//   }) => void;
// }

export function TaskFilter ({onFilterChange: {filters: IFilterProp}}:TaskFilterProps) {

// {onFilterChange: {status?: , priority?: }:TaskFilterProps}

onFilterChange() {

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



const setFilter: React.FC = () => {
    const [selectedStatus, setSelectedValue] = useState<string>('Pending'); // Default value
    const [selectedPriority, setSelectedValue] = useState<string>('Low'); // Default value

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        let property = event.target.value;
        setSelectedValue({...prevProperty, [property]);
    };
 
  return (
    <TaskList (newArray)>
    </TaskList>
  );
};
}


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