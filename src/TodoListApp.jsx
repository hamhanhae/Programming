import './todoList.css'

function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo__title">HyeonDo List</h1>

            <form className="todo__form">
                <input type="text" placeholder="할 일을 입력하세요" className="todo__input"/>
                <button type="submit" className="todo__button todo__button--add">Add</button>
            </form>
            <div>
                <ul className="todo__list">
                    <li className="todo__item todo__item--empty">
                        <p>할 일 없음.</p>
                    </li>
                    <li className="todo__item todo__item--complete">
                        <input type="checkbox" id="chk-1" className="todo__checkbox"/>
                        <label htmlFor="chk-1" className="todo__label">
                            <span>지각하기</span>
                        </label>
                        <button type="button" className="todo__button todo__button--edit">✏️</button>
                        <button type="button" className="todo__button todo__button--delete">❌</button>
                    </li>
                    <li>
                        <input type="checkbox" id="chk-2"/>
                        <label htmlFor="chk-2">
                            <span>롤체 in dawn</span>
                        </label>
                        <button type="button">✏️</button>
                        <button type="button">❌</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default TodoListApp;