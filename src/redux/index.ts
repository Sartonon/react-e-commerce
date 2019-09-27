import { combineReducers } from 'redux';
import { IUserState, Action as UserActions } from './user/user.types';
import userReducer from './user/user.reducer';

export interface StoreState {
  user: IUserState;
}

export type ReduxActions = UserActions;

export default combineReducers<StoreState>({
  user: userReducer,
});
