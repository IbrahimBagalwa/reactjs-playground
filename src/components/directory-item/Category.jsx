import { categories } from "../../mocks/data";
import DirectoryItem from "./DirectoryItem";
import "./directory-item.scss";

const Category = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem {...category} key={category.id} />
      ))}
    </div>
  );
};

export default Category;
