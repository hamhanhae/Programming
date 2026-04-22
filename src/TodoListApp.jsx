import './todoList.css'
import {useState} from 'react'
import TodoItemEmpty from './components/TodoItemEmpty.jsx'
// import Button from './components/Button.jsx'
// import Checkbox from './components/Checkbox.jsx'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoItem from './components/TodoItem.jsx'

class Todo {
    constructor(text) {
        this.id = Date.now(); //id : 고유의 값, new Data().getTime()
        this.text = text; // 할 일 내용
        this.isCompleted = false; // 완료 여부 : 미완
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]); // 할 일 목록 저정 state, 기본값
    function addTodo(text) {
        setTodos((todos) => [
            // 이전 todos 가져오기
            // 하나씩 꺼내서 새로운 리스트 만들자
             ...todos,
            // 뒤에 new Todo 만들어서 추가
            new Todo(text)

        ]);
    }
    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <div>
                <ul className="todo__list">
                    <TodoItemEmpty />
                    <TodoItem />
                </ul>
            </div>
        </div>
    )
}
export default TodoListApp;