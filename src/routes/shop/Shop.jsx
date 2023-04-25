import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import { useEffect } from "react";
import { setCategories } from "../../redux/store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase.util";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesArray = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesArray();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
