import { Button } from "../ui";
import { BUTTON_TYPE_CLASSES } from "../ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/store/cart/cart.action";
import { selectCartItems } from "../../redux/store/cart/cart.selector";
import { FC } from "react";
import { CategotyItem } from "../../redux/store/categories/categories.types";
import { ProductCartContainer, Footer, Name, Price } from "./product-card";
type ProductProps = {
  product: CategotyItem;
};
const ProductCard: FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);
  const addProductToCard = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price className="price">{price}</Price>
      </Footer>
      <Button
        buttonTypes={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCard}
      >
        Add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
