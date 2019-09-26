import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { IFirebaseUser } from '../../types';
import { Header as HeaderStyles } from './Styles';

interface IHeaderProps {
  currentUser: IFirebaseUser | null;
}

const Header: FC<IHeaderProps> = ({ currentUser }): JSX.Element => (
  <HeaderStyles>
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
  </HeaderStyles>
);

export default Header;
