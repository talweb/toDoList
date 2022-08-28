import React, { useState } from "react";
import TodoForm from "./components/TodoFrom";
import TodoList from "./components/TodoList";
import classes from "./App.module.css";

const App = () => {
  const [todos, setTodo] = useState([]);

  const updateTodo = (id, newValue) => {
    setTodo((prevTodos) =>
      prevTodos.map((item) => (item.id === id ? newValue : item))
    );
  };

  const addTodo = (todo) => setTodo((prevTodos) => [...prevTodos, todo]);

  const removeTodo = (id) => {
    setTodo((prevTodos) => [...prevTodos].filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    );
  };

  return (
      <div className={classes.todoApp}>
        <h1 className={classes.h1}> What should I need todo today?</h1>
        <TodoForm action="Add" onSubmit={addTodo} />
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
  );
};

export default App;
