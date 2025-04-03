import { useState } from "react";
import "./App.css";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
export interface TaskType {
  id: number;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
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
      <TaskForm onChange={handleText} onClick={handleTask} value={taskText} />
      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onCheckboxChange={handleCheckboxChange}
      />
    </>
  );
}

export default App;
