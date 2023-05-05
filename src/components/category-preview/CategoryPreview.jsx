import ProductCard from "../product-card/Product";
import {
  CartegoryPreviewContainer,
  Preview,
  TitleLink,
} from "./category-preview.style";

const CategoryPreview = ({ title, products }) => {
  return (
    <CartegoryPreviewContainer>
      <h2>
        <TitleLink>{title.toUpperCase()}</TitleLink>
      </h2>
      <Preview>
        {products
          ?.filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CartegoryPreviewContainer>
  );
};

export default CategoryPreview;
