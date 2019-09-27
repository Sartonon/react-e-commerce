import { ActionTypes, IUser, SetCurrentUser } from './user.types';

export const setCurrentUser = (user: IUser | null): SetCurrentUser => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});
