import React from "react";
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Delicious Food,Delivered To You</h1>
      <p>
        Choose Your Favorite meal from our board section of available meals and
        enjoy a delicious lunch or dinner at Home
      </p>
      <p>
        All Our meals are cooked with high quality ingridients,just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
