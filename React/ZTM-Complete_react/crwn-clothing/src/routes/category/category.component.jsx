import { CategoryContainer, CategoryTitle } from "./category.style"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";
const Category = () => {
    const { category } = useParams();
    const categoriesMap  = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        setProducts(categoriesMap[category])
    },[categoriesMap, category]);

    return (
        <>
        <CategoryTitle>{category.toLocaleUpperCase()}</CategoryTitle>
        {
            isLoading ? <Spinner/> : <CategoryContainer>
            {
                Array.isArray(products) &&  products.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </CategoryContainer>
        }
            
        </>

    )
}

export default Category;