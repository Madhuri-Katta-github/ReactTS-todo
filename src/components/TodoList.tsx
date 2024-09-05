import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface TodoProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<TodoProps> = ({ todos, setTodos }) => {
    return (
        <div>
            {todos.map((t) => (
                <SingleTodo todo={t} key={t.id} todos={todos} setTodos={setTodos} />
            ))}
        </div>
    );
}

export default TodoList;
