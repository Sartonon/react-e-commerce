import { Action, ActionTypes, IUserState } from './user.types';

const initialState: IUserState = {
  currentUser: null,
};

const userReducer = (state = initialState, action: Action): IUserState => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
