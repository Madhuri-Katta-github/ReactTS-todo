interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

// export default function InputFeild({todo,setTodo}:Props) {

const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <form onSubmit={handleAdd}>
            <input type="text" placeholder="Enter a task" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit">Go</button>
        </form>
    );
}

export default InputFeild;