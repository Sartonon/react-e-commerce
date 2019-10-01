import React, { FC } from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { Dispatch } from 'redux';
import { ReduxActions } from '../../redux';

interface ICartIconProps {
  toggleCartHidden: () => void;
}

const CartIcon: FC<ICartIconProps> = ({ toggleCartHidden }) => (
  console.log(toggleCartHidden()),
  (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
);

const mapDispatchToProps = (dispatch: Dispatch<ReduxActions>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(
  null,
  mapDispatchToProps,
)(CartIcon);
