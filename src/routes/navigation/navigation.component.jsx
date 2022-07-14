import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles';
import { Fragment, useContext } from 'react';
import { Outlet} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-drop.component';

import { ReactComponent as EzLogo } from '../../assets/ez-logo.svg';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../utils/firebase.utils';


const Navigation = () => {

    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    // console.log(currentUser);


    return (
      <Fragment>
        <NavigationContainer>
        <LogoContainer to='/'>
          <EzLogo className='logo'/>
          </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {
                  currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>
                    SIGN OUT
                    </NavLink>)
                    : (<NavLink to='/auth'>
                    SIGN IN
                </NavLink>)
                }
                <CartIcon/>
            </NavLinks>
              {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;