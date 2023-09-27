// import logo from "./logo.svg";
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import ToDos from "./MyComponent/ToDos";
import React, { useState, useEffect, useCallback } from "react";
import AddTodos from "./MyComponent/AddTodos";

function Work({ID}) {

  //ToDo Part

  let initTodo;
  if (localStorage.getItem("todos"+ID) == null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"+ID));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // localStorage.setItem("todos",JSON.stringify(todos))
  };

  function addTodos(title, desc, priority) {
    let s = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const todo = {
      sno: s,
      title: title,
      desc: desc,
      priority: priority
    };
    setTodos([...todos, todo]);
    // localStorage.setItem("todos",JSON.stringify(todos))
  }

  

  useEffect(() => {
    localStorage.setItem("todos"+ID, JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="Todo list" />

      <AddTodos addTodos={addTodos} />
      <ToDos Todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}


export default Work;
