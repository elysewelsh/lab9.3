import type { TaskFilterProps, TaskStatus} from "../../types"

export function TaskFilter ({onFilterChange}: TaskFilterProps) {
return (
          <form>
            <label htmlFor="status">Choose an option:</label>
            <select id="status" onChange={(e) => {
                let statusValue: any = e.target.value;
                statusValue === ""? (statusValue = "") : (statusValue as TaskStatus);
                onFilterChange({status: statusValue});}}>
                <option value="">All Statuses</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In-Progress</option>
            </select>

            <label htmlFor="priority">Choose an option:</label>
            <select id="priority" onChange={(e) => {
              let priorityValue: any = e.target.value;
              priorityValue === ""? (priorityValue = "") : (priorityValue as 'low' | 'medium' | 'high');
              onFilterChange({priority: priorityValue});}}>
                <option value="">All Priorities</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
        </form>
);
}

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


// const dataArray = [item1, item2, item3];
 
// const jsxElements = dataArray.map((itemData) => {
//   // For each item in dataArray, return a JSX element
//   return <MyComponent data={itemData} />;
// });
 
// // Now, jsxElements is an array like:
// // [<MyComponent data={item1} />, <MyComponent data={item2} />, <MyComponent data={item3} />]
 
// // You can render this array directly inside JSX:
// return <ul>{jsxElements}</ul>;