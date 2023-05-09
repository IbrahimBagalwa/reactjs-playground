import { Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/Product";
import "./category.scss";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../redux/store/categories/categories.selector";
import Spinner from "../../components/spinner/Spinner";

type CategoryRouteParams = {
  category: string;
};
const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const categoriesArray = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {categoriesArray[category]?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
