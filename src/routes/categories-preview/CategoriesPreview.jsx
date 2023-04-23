import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../redux/store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} products={products} title={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
