import { CategoryContainer, CategoryTitle } from "./category.style"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";
const Category = () => {
    const { category } = useParams();
    const categoriesMap  = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        setProducts(categoriesMap[category])
    },[categoriesMap, category]);
    return (
        <>
        <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {
                    Array.isArray(products) &&  products.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </CategoryContainer>
        </>

    )
}

export default Category;