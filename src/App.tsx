import { useState } from 'react'
import './App.css'


function App() {

  // const [taskArray, setTaskArray] = useState([]);
  // const [taskText, setTaskText] = useState([]);

  const taskArray = ['task1', 'task2', 'task3'];

  // const handleTask = () => {
  //   setTaskArray(taskText);

  //   console.log(setTaskArray);
  // };

  // const handleText = () => {
  //   setTaskText(taskText);

  //   console.log(setTaskText);
  // };

  return (
    <>
      <h1>ToDo List</h1>
      <input type="text" />
      <button>Add Task</button>
      <ul>
        <li>

        </li>
      </ul>
    </>
  )
}

export default App
