import { useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTxt, setEditTxt] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)
    )
  }

  const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todo) =>
        todo.id !== id)
    )
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, todo: editTxt } : todo)
    )
    setEdit(false)
  }
  return (
    <form style={{ display: "flex", justifyContent: "space-around", marginTop: "10px" }} onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? <input type="text" value={editTxt} onChange={(e) => setEditTxt(e.target.value)} /> : todo.isDone ? (<s>{todo.todo}</s>) : (<span>{todo.todo}</span>)}
      <div>
        <span style={{ marginRight: "18px", cursor: "pointer" }}
          onClick={() => {
            if (!edit && !todo.isDone) { setEdit(!edit) }
          }}
        >
          <AiFillEdit />
        </span>
        <span style={{ marginRight: "18px", cursor: "pointer" }} onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
        <span style={{ cursor: "pointer" }} onClick={() => handleDone(todo.id)}><MdDone /></span>
      </div>
    </form>
  );
}

export default SingleTodo;
