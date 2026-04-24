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

    function deleteTodo(id) {
        setTodos((todos) =>
            // todos에서 하나씩 꺼내어 todo의 id가 id와 같지 않은 것들을 남김
            todos.filter((todo) => todo.id !== id)
        )
    }

    function editTodo(id, newText) {
        // todos에서 하나씩 꺼내어 todo, id가 다르면 복사
        // todos에서 하나씩 꺼내어 todo, id가 같으면 newText로 대입하자
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        )
    }

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
    );
}

export default TodoListApp;