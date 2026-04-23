// Checkbox.jsx
export default function Checkbox(props) {
    const { children, id, ...rest } = props;
    return (
        <>
            <input 
                type="checkbox" 
                id={`chk-${id}`} 
                className="todo__checkbox" 
                {...rest}
            />
            <label htmlFor={`chk-${id}`} className="todo__label">{children}</label>
        </>
    )
}