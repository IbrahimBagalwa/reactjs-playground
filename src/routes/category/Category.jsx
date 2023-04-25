import { Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/Product";
import "./category.scss";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../redux/store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesArray = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {categoriesArray[category]?.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default Category;
