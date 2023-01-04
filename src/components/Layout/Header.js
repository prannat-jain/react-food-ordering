import { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Welcome to our Restaurant</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="food image"></img>
      </div>
    </Fragment>
  );
};

export default Header;
