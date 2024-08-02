import { Category } from "../types";
import CategoryItem from "./CategoryItem";

interface ICategoryListProps {
  catalog: Category[];
}
const CategoryList = ({ catalog = [] }: ICategoryListProps) => {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem
          key={el.idCategory}
          {...el}
        />
      ))}
    </div>
  );
};

export default CategoryList;
