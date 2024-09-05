import React, { useState } from "react";
import InputFeild from "./components/InputFeild";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("");
    }
  }

  // console.log(todos);
  

  return <div>
    <h1>---Tasks---</h1>
    <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    <TodoList todos={todos} setTodos={setTodos}/>
  </div>
}

export default App;