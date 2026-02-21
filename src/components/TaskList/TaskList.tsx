import type { TaskListProps } from '../../types'
import TaskItem from '../TaskItem/TaskItem'


export function TaskList ( {tasks, onStatusChange, onDelete}: TaskListProps) {
// iterates over tasks array and calls TaskItem component to display individual task with unique and stable key    
    const list = tasks.map((task) => {
            return (
                <div key={task.id}>
                <TaskItem  task={task} onStatusChange={onStatusChange} onDelete={onDelete}/>
                </div>
            );
        });
// display the array of formatted tasks
        return (
            <>
                {list}
            </>
        );
}

// REFERENCES:

// Jade helped with this during lab time.

// From Lab 2:
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

// From documentation: https://react.dev/learn/rendering-lists :
// const chemists = people.filter(person =>
//   person.profession === 'chemist'
// const listItems = chemists.map(person =>
//     <li>
//         <img
//             src={getImageUrl(person)}
//             alt={person.name}
//         />
//         <p>
//             <b>{person.name}:</b>
//             {' ' + person.profession + ' '}
//             known for {person.accomplishment}
//         </p>
//     </li>
// );
//     return <ul>{listItems}</ul>;);

// From ?, but it was helpful:
// const dataArray = [item1, item2, item3];
// const jsxElements = dataArray.map((itemData) => {
//   // For each item in dataArray, return a JSX element
//   return <MyComponent data={itemData} />;
// });
// // Now, jsxElements is an array like:
// // [<MyComponent data={item1} />, <MyComponent data={item2} />, <MyComponent data={item3} />]
// // You can render this array directly inside JSX:
// return <ul>{jsxElements}</ul>;