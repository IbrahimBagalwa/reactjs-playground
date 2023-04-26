import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../redux/store/categories/categories.selector";
import Spinner from "../../components/spinner/Spinner";

const CategoriesPreview = () => {
  const categoriesArray = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesArray).map((title) => {
          const products = categoriesArray[title];
          return (
            <CategoryPreview key={title} products={products} title={title} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
