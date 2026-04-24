import { useState } from 'react'
import Checkbox from './Checkbox.jsx'
import Button from './Button.jsx'

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    // isEditing: 수정 중인지 아닌지
    const [isEditing, setIsEditing] = useState(false);
    // editText: 수정 중인 텍스트
    const [editText, setEditText] = useState(todo.text);
    function handleEditClick() {
        // 수정 중이 아니면 수정 중으로 바꾸고 <input/> 보여주기
        if (!isEditing) {
            setIsEditing(true);
            setEditText(todo.text);
        } else {
            // 수정 중이면 수정 중이 아님으로 바꾸고 <Checkbox/> 보여주기
            const trimmedText = editText.trim();
            if (trimmedText != "" && trimmedText !== todo.text) { // 빈칸이 아니고 이전 텍스트와 다르면
                editTodo(todo.id, trimmedText);
            }
            setIsEditing(false);
        }

    }

    return (
        // todo.isCompleted가 참이면 "todo__item--complete" 아니면 ""
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {/*수정중이아니면*/}
            {!isEditing && (
                <Checkbox
                    id={todo.id}
                    onChange={() => toggleTodo(todo.id)}
                >
                    {todo.text}
                </Checkbox>
            )}
            {/*수정중이면*/}
            {isEditing && (
                <input
                    type="text"
                    className="todo__input--edit"
                    value={editText}
                    onChange={(event) => setEditText(event.target.value)}
                    //TODO : enter 치면 handelEditClick()
                    onKeyDown = {(event) => {
                        if (event.key === "Enter") {
                            handleEditClick();
                        }
                    }}
                    autoFocus
                />
            )}
            <Button
                type="button" className="todo__button todo__button--edit" onClick={handleEditClick}
                >{isEditing ? "💾" : "✏️"}</Button>
            <Button type="button" className="todo__button todo__button--delete" onClick={() => deleteTodo(todo.id)}>
                ❌
            </Button>
        </li>
    )
}