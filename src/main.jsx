import { StrictMode } from 'react' // 리액트에서 가져올게 많으면 중괄호
import { createRoot } from 'react-dom/client'
// import './index.css'
import './reset.css'
import TodoListApp from './TodoListApp.jsx' // 가져올게 하나밖에 없거나, 가져올게 많더라고 하나라고 지정하면 중괄호를 안 친다.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListApp />
  </StrictMode>,
)
