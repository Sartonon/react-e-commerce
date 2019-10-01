import { ActionTypes, Action } from './cart.types';

const initialState = {
  hidden: true,
};

const cartReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
