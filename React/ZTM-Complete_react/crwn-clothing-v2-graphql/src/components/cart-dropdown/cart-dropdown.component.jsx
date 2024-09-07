import { useContext, useCallback, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const sleep = (milisec) => {
  var start = new Date().getTime();
  for(var i = 0; i< 1e7; i++){
    if(new Date().getTime() - start > milisec){
      break;
    }
  }
}

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const [temp , setTemp] = useState("A");
  const [count, setCount] = useState(0);

   const navigate = useNavigate();

  const func = useMemo( () => {
    console.log("start");
    sleep(2000);
    console.log("end");
    return 100 + count;
  },[count])


  const goToCheckoutHandler = useCallback(() => {
    // scope of the values and the values itself are memoized
    navigate('/checkout');
    console.log(temp)
  },[temp]);

  return (
    <CartDropdownContainer>
      <div>{func}</div>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      {/* <Button onClick={()=> setCount(count + 1)}>Update</Button> */}
    </CartDropdownContainer>
  );
};

export default CartDropdown;
