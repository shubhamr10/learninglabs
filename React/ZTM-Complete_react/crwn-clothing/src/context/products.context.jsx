import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    setProducts:()=>null,
    products:[]
})

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value = {products, setProducts};

    

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}