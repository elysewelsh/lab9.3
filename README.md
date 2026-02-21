# 📋 Task Tracker

A client-side application for managing and filtering daily objectives.

## 💻 Technologies Used

* **React:** Frontend library for building the user interface.
* **TypeScript:** For static typing of data objects and component props.
* **Tailwind CSS:** Utility-first framework for styling.

## ✨ Features

* **View Data:** Displays a list of all relevant tasks, including descriptions, priorities, and deadlines.
* **Filter Items:** Sort the list by current status, priority level, or a combination of both.
* **Update Status:** Change the current phase of any item (e.g., from pending to completed).
* **Delete Items:** Permanently remove items from the dashboard.

## 🏛️ Component Architecture

The application relies on a top-down data flow. The root component (App.tsx) holds the main state (the master array of items and current states and filters) and passes that data down to child components (TaskList). User interactions in child components (TaskFilter and TaskItem) trigger callback functions passed down as props, which send instructions back up to the root to update the state.

                     [ App ]                           
            (State: tasks, filterState)                            
              │                     │                  
              ▼                     ▼                  
        onFilterChange()    filteredTasks (data)  
              │               onStatusChange()    
              │                 onDelete()             
              │                     │             
              ▼                     ▼             
        [ TaskFilter ]          [TaskList]              
                                    │             
                                    ▼             
                                task (data)       
                              onStatusChange()    
                                 onDelete()       
                                    │             
                                    ▼             
                                [ TaskItem ]     

## ⚙️ Installation

To run this project locally, execute the following commands in your terminal:

```bash
# Clone the repository
git clone [https://github.com/elysewelsh/lab9.3.git](https://github.com/elysewelsh/lab9.3.git)

# Navigate into the directory
cd task-manager

# Install dependencies (React, TypeScript, Tailwind, etc.)
npm install

# Start the local development server
npm run dev
```

## 📖 References

* **Project References:** References and code citations within components
* **To Format README:** These templates gave me formatting advice and inspiration:
- [Scrimba README template](https://github.com/elysewelsh/lab2.1/blob/main/README.md)
- [Frontend Mentor README template](https://github.com/elysewelsh/sba3/blob/main/README-template.md)
- [asciiflow.com](https://asciiflow.com/#/) made the flow diagram for the architecture

## 💖 Acknowledgements

* **Monique**
* **Pierre**
* **Adwaina**
* **Stacy**
* **Melvin**
* **Rod**
* **Ashley G.**
* **Jade**
* **Quinn**

## 🧘 Reflections

1. How did you ensure unique keys for your list items?
    >I ensured that each task.id was unique and that it would not change. I added the task.id as the key knowing that it was unique and stable and would not get updated like an index or a numbered list item.
1. What considerations did you make when implementing the filtering functionality?
    >From the given information, I knew that there would be an onFilterChange function and I knew how the filter property was structured and that it required two pieces of information, both the status and the priority. I knew the filtering logic would include cases where the filter properties were both empty, cases where they both had values, and cases where one had a value but the other didn't. I knew that I would need to compare the task's status and/or priority to the filter property somehow. I needed a state to keep track of the current filter state that included reference to the filter properties being initially set to "". 
    >
    >I added the filterState, and then went through several iterations of filter logic including switch case, tenery operators, short-circuit operator, back to tenery, and finally landed on the short-circuit again because it was suggested (see references in App.tsx). 
    >
    >I worked with Adwaina and Pierre on Discord to figure out where all the functions should live and how they should be sent between each other (creating a rough draft diagram of the one above in Component Architecture). Monique later joined and she and Pierre helped me figure out passing to and from onFilterChange and handleFilterChange. 
    >
    >And then I tested a lot, found errors (like that my TaskItem component hadn't been updated and wasn't passing the correct values), fixed them, and tada!
1. How did you handle state updates for task status changes?
    >I passed a callback function (handleStatusChange) from App.tsx to TaskList and then TaskItem (onStatusChange). When the user clicks the dropdown selection (onChange), TaskItem calls the callback function with the properties of that selection (the target value which is the TaskStatus value bound to the HTML element and the id of the task that the change happened within). App.tsx then received those properties and runs the handleStatusChange function to iterate over all the tasks in the tasks array and creates a copy of the appropriate object (task) within a new array of tasks where only the effected task received the update.
1. What challenges did you face when implementing conditional rendering?
    >Looking at this project, it appears that I'm not doing any conditional rendering within the JSX. I'm using conditions in the filter function to send the tasks array to the JSX, but nothing within curly braces in my project has conditions. 
    >
    >I will work to add an alert or message based on a condition.