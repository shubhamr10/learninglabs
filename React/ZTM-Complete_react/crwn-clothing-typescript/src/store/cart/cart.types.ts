import { CategoryItem } from "../categories/category.types";


export enum CART_ACTION_TYPES {
    SET_CART_TOGGLE="cart/SET_CART_TOGGLE",
    UPDATE_CART_ITEMS="cart/UPDATE_CART_ITEMS",
}


export type CartItem = CategoryItem & {
    quantity: number;
}