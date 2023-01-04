import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        //inbuilt attributes for input below
        input={{
          id: "amount_" + props.id, // setting unique ids using props
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>Add+</button>
    </form>
  );
};

export default MealItemForm;
