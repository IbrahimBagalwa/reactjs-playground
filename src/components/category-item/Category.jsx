import { categories } from "../../mocks/data";
import CategoryItem from "./CategoryItem";
import "./categories.styles.scss";

const Category = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem {...category} key={category.id} />
      ))}
    </div>
  );
};

export default Category;
