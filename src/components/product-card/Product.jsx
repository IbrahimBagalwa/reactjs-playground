import { useContext } from "react";
import { Button } from "../ui";
import "./product-card.scss";
import { CartContext } from "../../context/cart-context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;
  const addProductToCard = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonTypes="inverted" onClick={addProductToCard}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
