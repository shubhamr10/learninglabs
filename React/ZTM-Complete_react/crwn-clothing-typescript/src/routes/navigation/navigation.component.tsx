
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { selectIsCartOpen} from "../../store/cart/cart.selector";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from "./navigation.styles";
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser =  useSelector(selectCurrentUser);
  const isCartOpen  = useSelector(selectIsCartOpen);
  const signOutUser  = () => dispatch(signOutStart())
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (<span  onClick={signOutUser}>SIGN OUT</span>) : (<NavLink to='/auth'>
              SIGN IN
            </NavLink>)
          }
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown/> }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
