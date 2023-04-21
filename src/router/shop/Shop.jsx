import { useContext } from "react";
import ProductCard from "../../components/product-card/Product";
import "./shop.style.scss";
import { CategoriesContext } from "../../context/categories-context";
import { Fragment } from "react";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="product-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
