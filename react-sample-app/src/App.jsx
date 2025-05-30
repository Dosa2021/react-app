import './style.css'

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder='TODOを入力' />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li>
            <div className="list-row">
              <p>完了です</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
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