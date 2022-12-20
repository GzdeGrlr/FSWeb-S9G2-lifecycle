import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const { todos, handleToggleCompleted } = props;
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} handleToggleCompleted={handleToggleCompleted} />
          </li>
        ))}
      </ul>
    </div>
  );
}
