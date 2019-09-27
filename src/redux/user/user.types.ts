// STATE TYPES

export interface IUserState {
  currentUser: IUser | null;
}

export interface IUser {
  [key: string]: any;
}

// ACTION TYPES

export enum ActionTypes {
  SET_CURRENT_USER,
}

export interface SetCurrentUser {
  type: ActionTypes.SET_CURRENT_USER;
  payload: IUser | null;
}

export type Action = SetCurrentUser;
