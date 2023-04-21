import { useState, createContext, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.util.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});
const CategoriesContextProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  let value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
export default CategoriesContextProvider;
