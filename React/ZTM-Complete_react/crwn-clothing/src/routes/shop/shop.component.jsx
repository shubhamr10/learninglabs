import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();
   /**
   * Fetch the categories from the list
   */
  useEffect(()=>{
    dispatch(fetchCategoriesStart());
}, []);
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop;