import { useState } from 'react'
import type { Todo } from "./types/todo"
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import './App.css'

function App(){
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string)=>{
    if(!text.trim()) return;

    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        text,
        completed: false
      },
    ]);
  };

  const toggleTodo = (id: string)=>{
    setTodos(
      todos.map(todo=>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  const deleteTodo = (id: string)=>{
    setTodos(todos.filter(todo=>todo.id !==id));
  };

  return (
    <div className='app'>
      <h1>Todo App</h1>
      <TodoInput onAdd={addTodo}/>
      <TodoList
        todos = {todos}
        onToggle = {toggleTodo}
        onDelete = {deleteTodo}
      />
    </div>
  );
}

export default App
