import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import { CheckoutItemContainer, ImageContainer, Name, Quantity, Arrow, Values, Price, RemoveButton } from "./checkout-item.styles";

const CheckoutItem = ({
    cartItem
}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const {id, name, quantity, imageUrl, price} = cartItem;

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () =>  dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems, cartItem));

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${id} - ${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Values className="value">{quantity}</Values>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;