import { CategoryContainer, CategoryTitle } from "./category.style"
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
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