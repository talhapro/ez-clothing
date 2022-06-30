import './navigation.styles.scss';
import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as EzLogo } from '../../assets/ez-logo.svg';

import { UserContext } from '../../context/user.context';

import { signOutUser } from '../../utils/firebase.utils';


const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    // console.log(currentUser);

    const signOutHandler = async () => {
      await signOutUser();
      setCurrentUser(null);
    }

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
                    <span className='nav-link' onClick={signOutHandler}>
                    SIGN OUT
                    </span>)
                    : (<Link className='nav-link' to='/auth'>
                    SIGN IN
                </Link>)
                }
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;