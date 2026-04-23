import TodoItem from './components/TodoItem';
import TodoItemEmpty from './components/TodoItemEmpty'; 

export default function TodoList({ todos, toggleTodo}) {
    return (
        <ul className="todo__list">
            {todos.length === 0 && <TodoItemEmpty />}
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            ))}
        </ul>   
    );
}