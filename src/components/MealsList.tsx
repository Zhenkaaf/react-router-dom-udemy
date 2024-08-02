import { IMeal } from "../types";
import MealItem from "./MealItem";

interface IMealsList {
  meals: IMeal[];
}
const MealsList = ({ meals }: IMealsList) => {
  console.log(meals);
  return (
    <div className="list">
      {meals.map((meal) => (
        <MealItem
          key={meal.idMeal}
          {...meal}
        />
      ))}
    </div>
  );
};

export default MealsList;
