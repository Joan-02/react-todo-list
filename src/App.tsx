import { useState } from 'react';
import './App.css'
interface Task {
  text: string;
  isCompleted: boolean;
}

function App() {
  
  const [tasks, setTask] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState('');

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value)
  };

  console.log(taskText);

  const handleTask = () => {
    setTask([...tasks, { text: taskText, isCompleted: false}]);
    setTaskText('');
  };

  return (
    <>
      <h1>ToDo List</h1>
      <div className='add-task'>
        <input type="text" onChange={handleText} value={taskText}/>
        <button onClick={handleTask}>Add Task</button>
      </div>
      <div className='task-list'>
        {tasks.map((task) => {
          return (
            <div className='task'>
              <div>
                <input type="checkbox" checked={task.isCompleted}/>
                <span>{task.text}</span>
              </div>
              <button>Eliminar</button>
            </div>
          );
        })};
        
      </div>
    </>
  )
}

export default App
