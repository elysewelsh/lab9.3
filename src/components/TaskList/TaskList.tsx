import type { TaskListProps } from '../../types'
import TaskItem from '../TaskItem/TaskItem'


export function TaskList ( {tasks, onStatusChange, onDelete}: TaskListProps) {
    const list = tasks.map((task) => {
            return (
                <div key={task.id}>
                <TaskItem  task={task} onStatusChange={onStatusChange} onDelete={onDelete}/>
                </div>
            );
        });
// display the formatted array
        return (
            <>
                {list}
            </>
        );
}


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