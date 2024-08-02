import { NavLink } from "react-router-dom";

interface ICategoryItem {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}
const CategoryItem = ({
  idCategory,
  strCategory,
  strCategoryDescription,
  strCategoryThumb,
}: ICategoryItem) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={strCategoryThumb}
          alt={strCategory}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 100)}...</p>
      </div>
      <div className="card-action">
        <NavLink
          to={`/categories/${strCategory}`}
          className="btn"
        >
          Watch category
        </NavLink>
      </div>
    </div>
  );
};

export default CategoryItem;
