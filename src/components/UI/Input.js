import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*The ...props.input simply adds all the type, id, etc attributes of all input tags it gets without writing specifically*/}
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
