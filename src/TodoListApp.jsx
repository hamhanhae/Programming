import './todoList.css'
// import TodoItemEmpty from './components/TodoItemEmpty.jsx'
// import Button from './components/Button.jsx'
// import Checkbox from './components/Checkbox.jsx'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoItem from './components/TodoItem.jsx'

function TodoListApp() {
    return (
        <div className="todo">
            <TodoHeader/>
            <TodoAdder/>
            <div>
                <ul className="todo__list">
                    <TodoItemEmpty/>
                    <TodoItem/>
                </ul>
            </div>
        </div>
    )
}
export default TodoListApp;