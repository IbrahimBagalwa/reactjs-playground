import { useState, createContext } from "react";
import SHOP_DATA from "../mocks/shopData.js";
import { addCollectionAndDocument } from "../utils/firebase.util.js";
import { useEffect } from "react";
export const ProductContext = createContext({
  productData: [],
});
const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  // useEffect(() => {
  //   addCollectionAndDocument("categories", SHOP_DATA);
  // }, []);
  let value = { productData };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
export default ProductContextProvider;
