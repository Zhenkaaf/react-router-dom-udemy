import { NavLink } from "react-router-dom";

interface IMealItem {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

const MealItem = ({ idMeal, strMeal, strMealThumb }: IMealItem) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={strMealThumb}
          alt={strMeal}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <NavLink
          to={`/meal/${idMeal}`}
          className="btn"
        >
          Watch recipe
        </NavLink>
      </div>
    </div>
  );
};

export default MealItem;
