import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";

const URL = "http://localhost:9000/api/todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res.data);
      console.log(res.data.data);
      setTodos(res.data.data);
    });
  }, []);

  const handleAddTodo = (nTodo) => {
    axios
      .post(URL, {
        isim: nTodo,
        tamamlandi: false,
        id: Date.now(),
      })
      .then((res) => {
        console.log(res.data.data);
        setTodos([...todos, res.data.data]);
      });
  };

  const handleToggleCompleted = (id) => {
    axios
      .patch(URL + `/${id}`, {
        tamamlandi: true,
      })
      .then(() => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, tamamlandi: !todo.tamamlandi };
            }
            return todo;
          })
        );
      });
  };

  const handleCompletedHide = () => {
    setTodos(todos.filter((todo) => !todo.tamamlandi));
  };

  //   const deleteCompleted = (id) => {
  //     axios.delete(`${URL}/${id}`, { tamamlandi: false }).then(() => {
  //       setTodos(
  //         todos.filter((todo) => {
  //           return todo.id !== id;
  //         })
  //       );
  //     });
  //   };ç

  // const deleteCompleted = () => {
  //     if (todos.tamamlandi == false) {
  //     axios.delete(URL).then(() => {
  //         setTodos(
  //         todos.filter((todo) => {
  //             return todo.tamamlandi;
  //         })
  //         );
  //     });
  //     }
  // };

  return (
    <div className="container">
      <TodoList todos={todos} handleToggleCompleted={handleToggleCompleted} />
      <Form
        todos={todos}
        handleAddTodo={handleAddTodo}
        handleCompletedHide={handleCompletedHide}
        formSubmit={setTodos}
      />
    </div>
  );
}
