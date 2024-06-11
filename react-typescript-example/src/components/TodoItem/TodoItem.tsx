interface TodoItemProps {
  text: string;
  completed: boolean;
}

function TodoItem(props: TodoItemProps) {
  const { text, completed } = props;

  return (
    <li>
      {text} - {completed}
    </li>
  );
}

export default TodoItem;
