import { categories } from "../../mocks/data";
import DirectoryItem from "./DirectoryItem";
import { CategoriesContainer } from "./directory-item.style";

const Category = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <DirectoryItem {...category} key={category.id} />
      ))}
    </CategoriesContainer>
  );
};

export default Category;
