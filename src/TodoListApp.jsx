function TodoListApp() {
    return (
        <div>
            <h1>HyeonDo List</h1>

            <form>
                <input type="text" placeholder="할 일을 입력하세요" />
                <button type="submit">Add</button>
            </form>
            <div>
                <ul>
                    <li>

                        <input type="checkbox" id="chk-1"/>
                        <label htmlFor="chk-1">
                            <span>지각하기</span>
                        </label>
                        <button type="button">✏️</button>
                        <button type="button">❌</button>
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