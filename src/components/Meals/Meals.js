import { Fragment } from "react";
import AvailabelMeals from "./AvailabelMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <AvailabelMeals />
      <MealsSummary />
    </Fragment>
  );
};
export default Meals;
