import { TaskType } from "../App";
import { Task } from "./Task";

interface TaskList {
  tasks: TaskType[];
  onDelete: (id: number) => void;
  onCheckboxChange: (id: number) => void;
}

export const TaskList = (props: TaskList) => {
  const { tasks, onDelete, onCheckboxChange } = props;

  return (
    <div className="task-list">
      {tasks.map((task) => {
        return (
          <Task
            id={task.id}
            text={task.text}
            isCompleted={task.isCompleted}
            onDelete={onDelete}
            onCheckboxChange={onCheckboxChange}
          />
        );
      })}
    </div>
  );
};
