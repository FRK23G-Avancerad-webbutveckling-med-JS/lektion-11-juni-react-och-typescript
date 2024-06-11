import { useState } from 'react';

interface AddTodoProps {
  addNewTodo: (todoText: string) => void; // Detta betyder att det är en funktion som vi skickar som props till AddTodo
}

function AddTodo(props: AddTodoProps) {
  const [todoText, setTodoText] = useState<string>('');
  const { addNewTodo } = props;

  return (
    <section>
      <input
        type='text'
        onChange={(event) => {
          setTodoText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          addNewTodo(todoText);
        }}
      >
        Lägg till
      </button>
    </section>
  );
}

export default AddTodo;
