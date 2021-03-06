import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { Header as HeaderStyles } from './Styles';
import { StoreState } from '../../redux';
import { IUser } from '../../redux/user/user.types';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

interface IHeaderProps {
  currentUser: IUser | null;
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
      <CartIcon />
    </div>
    <CartDropdown />
  </HeaderStyles>
);

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
}: StoreState) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
