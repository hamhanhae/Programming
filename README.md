# programming 소스 코드
## 02_counter
vanilla HTMl, JavaScript
## react 시작
```shell
npm create vite@latest .
```

### CounterApp 🥱
- `useState(초기값)`
- `onClick={() => set함수(바꿀값)}`
- `onClick={() => set함수((이전 state) => 이전 state + 1)}`
- `onClick={함수이름}`

### TodoListApp ☺️
- React Component 분리
- for -> htmlFor, class -> className
- props
- `<input id={id} value={}/>`, `<label htmlFor={id}/>`
- onChange
- 구조 분해 할당
- `...스프레드 연산자`
- `<form onSubmit={}/>`
- `map()`
- `<TodoItem key={}/>`
- `const handleEvent = (event) => {}`
- `{조건식 ? 참 : 거짓}`
- `{조건식 && 참}`, `{!조건식 && 거짓}`
- onKeyDown
- LocalStorage, `useEffect(명령어, [변할값])`