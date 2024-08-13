import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { CheckoutItemContainer, ImageContainer, Name, Quantity, Arrow, Values, Price, RemoveButton } from "./checkout-item.styles";

const CheckoutItem = ({
    cartItem
}) => {
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const {id, name, quantity, imageUrl, price} = cartItem;

    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () =>  addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem)

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