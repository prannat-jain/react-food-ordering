import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*The ...props.input simply adds all the type, id, etc attributes of all input tags it gets without writing specifically*/}
      <input {...props.input}></input>
    </div>
  );
};

export default Input;
