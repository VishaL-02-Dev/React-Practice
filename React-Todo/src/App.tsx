import { useState } from 'react'
import type { Todo } from "./types/todo"
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

import './App.css'

function App(){
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string)=>{
    const trimmedText = text.trim();

    if(!trimmedText){
      alert("Todo cannot be empty");
      return;
    }

    const isDuplicate = todos.some(
      todo => todo.text.toLowerCase() === trimmedText.toLocaleLowerCase()
    );
    
    if(isDuplicate){
      alert("Todo already exists!")
    }

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
