import "./category.style.scss";
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
        <h2 className="category-title">{category.toLocaleUpperCase()}</h2>
            <div className="category-container">
                {
                    Array.isArray(products) &&  products.map(product => <ProductCard key={product.id} product={product}/>)
                }
            </div>
        </>

    )
}

export default Category;