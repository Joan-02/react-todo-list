import { useState } from "react";
import "./App.css";
interface Task {
  text: string;
  isCompleted: boolean;
  id: number;
}

function App() {
  const [tasks, setTask] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  console.log(taskText);

  const handleTask = () => {
    setTask([...tasks, { text: taskText, isCompleted: false, id: Date.now() }]);
    setTaskText("");
  };

  const handleDelete = (id: number) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const handleCheckbox = (id: number) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <>
      <h1>ToDo List</h1>
      <div className="add-task">
        <input type="text" onChange={handleText} value={taskText} />
        <button onClick={handleTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => {
          return (
            <div className="task">
              <div>
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => handleCheckbox(task.id)}
                />
                <span className={task.isCompleted ? "completed" : ""}>
                  {task.text}
                </span>
              </div>
              <button
                className="eliminar-task"
                onClick={() => handleDelete(task.id)}
              >
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
