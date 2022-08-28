import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoFrom";
import classes from "./TodoList.module.css";

const TodoList = ({ todos, toggleComplete, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return (
      <TodoForm
        action="Edit"
        initialValue={edit.value}
        onSubmit={submitUpdate}
      />
    );
  }

  return todos.map((todo) => (
    <div
      className={`${classes.todoRow} ${
        todo.isComplete ? classes.complete : ""
      }`}
      key={todo.id}
    >
      <div
        onClick={() => {
          toggleComplete(todo.id);
        }}
      >
        {todo.text}
      </div>
      <div className={classes.icons}>
        <RiCloseCircleLine
          onClick={() => {
            removeTodo(todo.id);
          }}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => {
            setEdit({ id: todo.id, value: todo.text });
          }}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default TodoList;
