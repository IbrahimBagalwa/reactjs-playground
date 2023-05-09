import { Button } from "../ui";
import "./product-card.scss";
import { BUTTON_TYPE_CLASSES } from "../ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/store/cart/cart.action";
import { selectCartItems } from "../../redux/store/cart/cart.selector";
import { CartItem } from "../../redux/store/cart/cart.types";
import { FC } from "react";

type ProductProps = {
  product: CartItem;
};
const ProductCard: FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);
  const addProductToCard = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonTypes={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCard}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
