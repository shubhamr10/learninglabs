import { CartDropDownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const gotoCheckoutHandler = () => {
        navigate("/checkout");
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)) : <EmptyMessage> Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={gotoCheckoutHandler}>Go to checkout</Button>
        </CartDropDownContainer>
    )
}

export default CartDropDown;