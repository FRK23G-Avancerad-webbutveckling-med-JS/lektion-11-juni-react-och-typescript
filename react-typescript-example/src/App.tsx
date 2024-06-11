import { useState, useEffect } from 'react';
import './App.css';

import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

interface Todo {
  completed: boolean;
  id: number;
  todo: string;
  userId: number;
}

interface Response {
  limit: number;
  skip: number;
  todos: Todo[];
  total: number;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function getTodos(): Promise<void> {
      const response = await fetch('https://dummyjson.com/todos');
      const data: Response = await response.json();

      setTodos(data.todos);
    }

    getTodos();
  }, []);

  function addNewTodo(todoText: string): void {
    const newTodo: Todo = {
      completed: false,
      userId: todos.length + 1,
      todo: todoText,
      id: todos.length + 1,
    };

    const tempArr = [...todos]; // Gör en kopia på nuvarande todos array
    tempArr.push(newTodo);

    setTodos(tempArr);
  }

  const todoComponents = todos.map((todo) => {
    return (
      <TodoItem text={todo.todo} completed={todo.completed} key={todo.id} />
    );
  });

  return (
    <main>
      <ul>{todoComponents}</ul>
      <AddTodo addNewTodo={addNewTodo} />
    </main>
  );
}

export default App;
