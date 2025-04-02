import { useState } from "react";
import "./App.css";
import { Task } from "./components/task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");

  const handleText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  console.log(taskText);

  const handleTask = () => {
    setTasks([
      ...tasks,
      { text: taskText, isCompleted: false, id: Date.now() },
    ]);
    setTaskText("");
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCheckboxChange = (id: number) => {
    setTasks(
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
            <Task
              id={task.id}
              text={task.text}
              isCompleted={task.isCompleted}
              onDelete={handleDelete}
              onCheckboxChange={handleCheckboxChange}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
