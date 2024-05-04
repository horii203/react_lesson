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
    // 未完了のタスクをコピー
    const newTodos = [...incompleteTodos];
    // index番目の要素を１つ削除する
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  // 完了ボタン
  const onClickComplete = (index) => {
    // 「未完了のTODO」から削除する
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    // 「完了のTODO」に追加する
    // 現在の完了タスクに、「完了」されたタスクを追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setincompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
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
                <button onClick={() => onClickComplete(index)}>完了</button>
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
