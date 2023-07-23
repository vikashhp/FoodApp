import React from "react";
import { Fragment } from "react";
import mealimg from "../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meals/MealsSummary";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick}></HeaderCartButton>
      </header>

      <div className={classes["main-image"]}>
        <img src={mealimg} alt="a image" />
      </div>
    </Fragment>
  );
};

export default Header;
