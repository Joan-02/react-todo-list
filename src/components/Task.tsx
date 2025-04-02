export interface Task {
  text: string;
  isCompleted: boolean;
  id: number;
  onDelete: (id: number) => void;
  onCheckboxChange: (id: number) => void;
}

export const Task = (props: Task) => {
  const { text, isCompleted, id, onDelete, onCheckboxChange } = props;

  return (
    <div className="task">
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => onCheckboxChange(id)}
        />
        <span className={isCompleted ? "completed" : ""}>{text}</span>
      </div>
      <button className="eliminar-task" onClick={() => onDelete(id)}>
        Eliminar
      </button>
    </div>
  );
};
