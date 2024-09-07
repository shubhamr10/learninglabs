import { useContext, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const [temp , setTemp] = useState("A");
  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    // scope of the values and the values itself are memoized
    navigate('/checkout');
    console.log(temp)
  },[temp]);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      <Button onClick={()=> setTemp("B")}>Update</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
