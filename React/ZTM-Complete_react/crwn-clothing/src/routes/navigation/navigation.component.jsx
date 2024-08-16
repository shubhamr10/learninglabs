
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { selectIsCartOpen} from "../../store/cart/cart.selector";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from "./navigation.styles";
import { SignOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';

const Navigation = () => {
  const currentUser =  useSelector(selectCurrentUser);
  const isCartOpen  = useSelector(selectIsCartOpen);
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
            currentUser ? (<NavLink as="span" onClick={SignOutUser}>SIGN OUT</NavLink>) : (<NavLink to='/auth'>
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
