import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems  contains product to add
    const existingCartItem = cartItems.find((cartItems) => cartItems.id === productToAdd.id);
    // if found increment
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }
    // return new array with modified cartitems/new cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // approach one
    // // check if the item quatity is more than 1
    // const updatedCartItems = cartItems.reduce((arr, cartItem) => {
    //     if(cartItem.id === cartItemToRemove.id){
    //         if(cartItem.quantity > 1){
    //             cartItem.quantity = cartItem.quantity - 1;
    //             arr.push(cartItem);
    //         }
    //     } else {
    //         arr.push(cartItem);
    //     }
    //     return arr;
    // }, [])
    // // if less than remove the item from the list
    // return updatedCartItems;

    // second approach to this method
    const existingCartItem = cartItems.find((cartItems) => cartItems.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)

}

const clearCartFromItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:() => {},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    clearItemFromCart:()=>{},
    cartCount:0,
    totalAmount:0
})



export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [totalAmount, setTotalAmout] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=> {
            total = total + cartItem.quantity;
            return total
        }, 0)
        setCartCount(newCartCount);
    },[cartItems])
    // keep useEffect for a singe responsilbility priciple for code efficiency
    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem)=>{
            total = total + (cartItem.quantity * cartItem.price);
            return total;
        }, 0);
        setTotalAmout(newCartTotal);
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (productToRemove) => {
        setCartItems(clearCartFromItem(cartItems, productToRemove))
    }

    const value = { isCartOpen, setIsCartOpen, addItemToCart,removeItemFromCart, clearItemFromCart, cartItems, cartCount, totalAmount };
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>  
    )
}