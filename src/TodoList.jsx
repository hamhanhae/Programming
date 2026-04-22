import TodoItem from './components/TodoItem';
import TodoItme from './TodoItem.jsx';

export default function TodoList({todos}) {
    return (
        <ul className="todo__list">
            {todos.length == 0 && <TodoItemEmpty />}
            {todos.length > 0 && todos.map((todo) =>
                <TodoItem key={todo.id} todo={todo}/>
            )}
         </ul>   
    )
}