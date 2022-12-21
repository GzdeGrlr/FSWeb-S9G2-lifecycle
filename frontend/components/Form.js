import React, { useState } from "react";

export default function Form(props) {
  const { formSubmit, todos, handleAddTodo, handleToggle, hideCompleted } =
    props;

  const [newTodo, setNewTodo] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (newTodo.trim()) {
      handleAddTodo(newTodo);
      setNewTodo("");
      formSubmit(todos);
    } else {
      alert("Please add a task!");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChange}></input>{" "}
        <button type="submit"> Add To Do </button>
        <br />
        <br />
      </form>
      <button onClick={handleToggle}>
        {" "}
        {hideCompleted ? "Show" : "Hide"} Completed
      </button>{" "}
      <span>
        {/* <button onClick={formDelete}>Delete Completed Ones</button> */}
      </span>
    </div>
  );
}
