import { useState, createContext } from "react";
import SHOP_DATA from "../mocks/shopData.json";

export const ProductContext = createContext({
  productData: [],
});
const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState(SHOP_DATA);
  let value = { productData };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export default ProductContextProvider;
