import { createAction } from "../../utils/reducer/reducer.util";
import { CART_ACTION_TYPES } from "./cart.types";

/**
 * 
 * @param {*} boolean 
 * @returns 
 */
export const setIsCartOpen = (boolean) => createAction(CART_ACTION_TYPES.SET_CART_TOGGLE, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems);
}

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartFromItem( cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems);
}

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
    const existingCartItem = cartItems.find((cartItems) => cartItems.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)

}

const clearCartFromItem = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}
