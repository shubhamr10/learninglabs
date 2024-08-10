import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.json";


export const ProductsContext = createContext({
    setProducts:()=>null,
    products:[]
})

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value = {products, setProducts};

    useEffect(()=>{
        const shop_data = SHOP_DATA;
        setProducts(shop_data);
    },[]);

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}