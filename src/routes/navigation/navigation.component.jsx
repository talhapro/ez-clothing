import './navigation.styles.scss';
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

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
        <div className='navigation'>
        <Link className= 'logo-container' to='/'>
          <EzLogo className='logo'/>
          </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>
                    SIGN OUT
                    </span>)
                    : (<Link className='nav-link' to='/auth'>
                    SIGN IN
                </Link>)
                }
                <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown />}
        </div>
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;