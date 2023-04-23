import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../redux/store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesArray = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesArray).map((title) => {
        const products = categoriesArray[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
