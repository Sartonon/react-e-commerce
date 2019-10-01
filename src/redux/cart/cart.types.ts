export interface ICartState {
  hidden: boolean;
}

export enum ActionTypes {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
}

export interface ToggleCartHidden {
  type: ActionTypes.TOGGLE_CART_HIDDEN;
}

export type Action = ToggleCartHidden;
