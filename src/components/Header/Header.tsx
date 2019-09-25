import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

interface IHeaderProps {
  currentUser: firebase.User | null;
}

const Header: FC<IHeaderProps> = ({ currentUser }): JSX.Element => (
  <header className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin">SIGN IN</Link>
      )}
    </div>
  </header>
);

export default Header;
