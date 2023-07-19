import React from "react";
import { Fragment } from "react";
import mealimg from "../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealimg} alt='a image' />
      </div>
    </Fragment>
  )
};

export default Header;
