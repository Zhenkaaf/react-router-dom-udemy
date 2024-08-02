import { API_URL } from "./config";

export const getMealById = async (mealId: string) => {
  const response = await fetch(API_URL + "lookup.php?i=" + mealId);
  const meal = await response.json();
  return meal;
  //из асинхронной функции всегда возвращается промис!
};

export const getAllCategories = async () => {
  const response = await fetch(API_URL + "categories.php");
  return await response.json();
};

export const getFilteredCategory = async (catName: string) => {
  const response = await fetch(API_URL + "filter.php?c=" + catName);
  return await response.json();
};
