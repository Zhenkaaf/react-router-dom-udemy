import { useEffect, useState } from "react";
import { getAllCategories } from "../api";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import { Category } from "../types";
import Search from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [catalog, setCatalog] = useState<Category[]>([]);
  const [filteredCatalog, setFilteredCatalog] = useState<Category[]>([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  console.log(pathname, search);

  const handleSearch = (str: string) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    const params = new URLSearchParams(search);
    params.set("search", str);
    navigate(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      console.log(data.categories);
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item: Category) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <div>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </div>
  );
};

export default Home;
