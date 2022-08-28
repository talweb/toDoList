import { useState, useRef, useEffect } from "react";
import classes from "./TodoForm.module.css";
const TodoForm = (props) => {
  const [input, setInput] = useState(
    props.initialValue ? props.initialValue : ""
  );
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.random(),
      text: input,
    });
    setInput("");
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        className={classes.input}
        type="text"
        placeholder={`${props.action} a todo`}
        value={input}
        name="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        ref={inputRef}
      />
      <button type="submit" className={classes.button}>
        {props.action}
      </button>
    </form>
  );
};
export default TodoForm;
