import Checkbox from './Checkbox.jsx'
import Button from './Button.jsx'
export default function TodoItem() {
    return (
        <li className="todo__item todo__item--complete">
            <Checkbox id="1">할 일 1</Checkbox>
            <Button type="button" className="todo__button todo__button--edit">✏️</Button>
            <Button type="button" className="todo__button todo__button--delete">❌</Button>
        </li>
    )
}