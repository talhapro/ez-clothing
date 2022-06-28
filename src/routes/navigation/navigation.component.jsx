import './navigation.styles.scss';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as EzLogo } from '../../assets/ez-logo.svg';


const Navigation = () => {

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
                <Link className='nav-link' to='/sign-in'>
                    SIGN IN
                </Link>
            </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  }

  export default Navigation;