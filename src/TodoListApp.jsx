import './todoList.css'
import TodoItemEmpty from './components/TodoItemEmpty.jsx'
import Button from './components/Button.jsx'
import Checkbox from './components/Checkbox.jsx'

function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo__title">HyeonDo List</h1>
            <form className="todo__form">
                <input type="text" placeholder="할 일을 입력하세요" className="todo__input"/>
                <Button type="submit" className="todo__button todo__button--add">Add</Button>
            </form>
            <div>
                <ul className="todo__list">
                    <TodoItemEmpty/>
                    <li className="todo__item todo__item--complete">
                    <Checkbox id="1">할 일 1</Checkbox>
                        <Button type="button" className="todo__button todo__button--edit">✏️</Button>
                        <Button type="button" className="todo__button todo__button--delete">❌</Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default TodoListApp;