import React, { FC, useState } from "react";
import "./style.css";

export const Todo: FC = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([
    "TODOです1",
    "TODOです2",
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "TODOでした1",
    "TODOでした2",
  ]);

  const onChangeTodoText = (event) => setTodoText(event.target.value); //入力された文字を保存

  // 「追加」クリックで実行。incompleteTodosの配列に追加する
  const onClickAdd = () => {
    if (todoText === "") return; // テキストボックスに何も入ってなかった何もしない
    const newTodos = [...incompleteTodos, todoText]; // いまのincompleteTodosをコピーしてセット。todoTextを追加。
    setincompleteTodos(newTodos);
    setTodoText(""); // 追加が終わったらテキストボックスをリセット
  };

  // 削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    // index番目の要素を１つ削除する
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
