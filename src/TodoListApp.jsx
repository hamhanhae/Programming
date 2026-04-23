import './todoList.css'
import { useState } from 'react'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoList from './TodoList.jsx'

class Todo {
    constructor(text) {
        this.id = Date.now();
        this.text = text;
        this.isCompleted = false;
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]);

    function addTodo(text) {
        setTodos((prevTodos) => [
            ...prevTodos,
            new Todo(text)
        ]);
    }

    function toggleTodo(id) {
        // todos에서 하나씩 꺼내어 todo의 id가 id와 같으면, ! 이전 isCompleted 
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        )
    }

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
    ); // 이 부분의 괄호 짝이 맞는지 확인하세요!
}

export default TodoListApp;