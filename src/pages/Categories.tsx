import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import { IMeal } from "../types";
import Preloader from "../components/Preloader";
import MealsList from "../components/MealsList";

const Categories = () => {
  const [meals, setMeals] = useState<IMeal[]>([]);
  const { name } = useParams<string>();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (name) {
      getFilteredCategory(name).then((data) => {
        setMeals(data.meals || []);
      });
    }
  }, [name]);

  return (
    <div>
      <button
        className="btn"
        onClick={handleGoBack}
      >
        Go back
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </div>
  );
};

export default Categories;
