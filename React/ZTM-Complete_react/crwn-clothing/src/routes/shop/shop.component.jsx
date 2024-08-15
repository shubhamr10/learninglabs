import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch();
   /**
   * Fetch the categories from the list
   */
  useEffect(()=>{
    const getCategories = async () => {
        const categoryMap = await getCategoriesAndDocuments();
        dispatch(setCategoriesMap(categoryMap));
    }
    getCategories();
}, [dispatch]);
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop;