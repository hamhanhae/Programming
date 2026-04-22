import {useState} from 'react'
import Button from './Button.jsx'

export default function TodoAdder({addTodo}) {
    const [inputTodo, setInputTodo] = useState('');
    function handleSubmit(event) {
        event.preventDefault(); //submit 기본 동작 막자
        if (!inputTodo.trim()) return; // 빈칸이면 return
        addTodo(inputTodo.trim());
        setInputTodo('');
    }
    return (
        <>
            <form className="todo__form" onSubmit={handleSubmit}>
                <input
                type="text" placeholder="할 일을 입력하세요" className="todo__input"
                value={inputTodo} onChange={(event) => setInputTodo(event.target.value)}
                />
                <Button type="submit" className="todo__button todo_t_button--add">Add</Button>
            </form>
        </>
    )
}