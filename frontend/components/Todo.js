import React from "react";
import { TiTick } from "react-icons/ti";

export default function Todo(props) {
  const { todo, handleToggleCompleted } = props;
  return (
    <div>
      <li onClick={() => handleToggleCompleted(todo.id)}>
        {todo.isim} {todo.tamamlandi ? <TiTick /> : ""}
      </li>{" "}
    </div>
  );
}
