import { combineReducers } from 'redux';
import { IUserState, Action as UserAction } from './user/user.types';
import userReducer from './user/user.reducer';
import { ICartState, Action as CartAction } from './cart/cart.types';
import cartReducer from './cart/cart.reducer';

export interface StoreState {
  user: IUserState;
  cart: ICartState;
}

export type ReduxActions = UserAction | CartAction;

export default combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer,
});
