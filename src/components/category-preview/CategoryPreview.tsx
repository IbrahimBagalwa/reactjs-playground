import { FC } from "react";
import { CategotyItem } from "../../redux/store/categories/categories.types";
import ProductCard from "../product-card/Product";
import {
  CartegoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.style";

type CategoryPreviewProps = {
  title: string;
  products: CategotyItem[];
};
const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CartegoryPreviewContainer>
      <h2>
        <Title>{title.toUpperCase()}</Title>
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
