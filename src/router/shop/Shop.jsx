import { useContext } from "react";
import { ProductContext } from "../../context/product-context";
import ProductCard from "../../components/product-card/Product";
import "./shop.style.scss";
const Shop = () => {
  const { productData } = useContext(ProductContext);
  return (
    <div className="product-container">
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
