import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.util";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { CategoryItem } from "../categories/category.types";
/**
 * 
 * @param {*} boolean 
 * @returns 
 */
// action creator defination
export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_CART_TOGGLE, boolean>;
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.UPDATE_CART_ITEMS, CartItem[]>


export const setIsCartOpen = withMatcher((boolean:boolean):SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_CART_TOGGLE, boolean));

export const setCartItems = withMatcher((cartItems:CartItem[]):SetCartItems => createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, cartItems));

export const addItemToCart = (cartItems: CartItem[], productToAdd:CategoryItem):SetCartItems => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
}

export const removeItemToCart = (cartItems: CartItem[], cartItemToRemove: CategoryItem):SetCartItems => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CategoryItem):SetCartItems => {
    const newCartItems = clearCartFromItem( cartItems, cartItemToClear);
    return setCartItems(newCartItems);
}

const addCartItem = (cartItems:CartItem[], productToAdd:CategoryItem):CartItem[] => {
    // find if cartItems  contains product to add
    const existingCartItem = cartItems.find((cartItems:CartItem):boolean => cartItems.id === productToAdd.id);
    // if found increment
    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem)
    }
    // return new array with modified cartitems/new cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CategoryItem):CartItem[] => {
    const existingCartItem = cartItems.find((cartItems:CartItem):boolean => cartItems.id === cartItemToRemove.id);
    if(existingCartItem?.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem)

}

const clearCartFromItem = (cartItems: CartItem[], cartItemToRemove: CategoryItem):CartItem[] => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}
