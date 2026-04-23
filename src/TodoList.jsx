import TodoItem from './components/TodoItem';
import TodoItemEmpty from './components/TodoItemEmpty'; 

export default function TodoList({ todos, ...rest}) {
    return (
        <ul className="todo__list">
            {todos.length === 0 && <TodoItemEmpty />}
            {todos.length > 0 && todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} {...rest}/>
            ))}
        </ul>   
    );
}