interface TaskForm {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  value: string;
}

export const TaskForm = (props: TaskForm) => {
  const { onChange, onClick, value } = props;

  return (
    <div className="add-task">
      <input type="text" onChange={onChange} value={value} />
      <button onClick={onClick}>Add Task</button>
    </div>
  );
};
