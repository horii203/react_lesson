import React, { FC, useState } from "react";
import "./style.css";
import { InputTodos } from "./components/inputTodo.tsx";
import { IncompleteTodos } from "./components/incompleteTodos.tsx";
import { CompleteTodos } from "./components/completeTodos.tsx";

export const Todo: FC = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

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
    // それぞれstateを更新
    setincompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタン
  const onClickBack = (index) => {
    // 「完了のTODO」から削除する
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    // 「未完了のTODO」に追加する
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setincompleteTodos(newIncompleteTodos);
  };

  // 登録できるTODOは５個まで
  const isMax = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodos
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMax}
      />

      {isMax && <p>登録できるTODOは５個までです！消化してください。</p>}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

export default Todo;
