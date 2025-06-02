import { useState } from 'react';
import './style.css';

export const App = () => {
  const [todoText, setTodoText] = useState('')
  const [inCompleteTodos, setInCompleteTodos] = useState([
    'TODO_1です',
    'TODO_2です'
  ])
  const [completeTodos, setCompleteTodos] = useState([
    'TODO_1でした',
    'TODO_2でした'
  ])

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === '') return
    const newTodos = [...inCompleteTodos, todoText]
    setInCompleteTodos(newTodos)
    setTodoText('')
  }

  return (
    <>
      <div className="input-area">
        <input placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {inCompleteTodos.map((todo) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li>
            <p>完了です</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  )
}