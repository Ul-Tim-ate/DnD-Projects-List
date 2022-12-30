import User from "../../types/user/user";
import { UserActionsTypes } from "../../types/user/user-actions-types";

const initialState = {} as User;

const user = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case UserActionsTypes.SET_USER:
      return {
        ...state,
        id: payload.id,
      };
    default:
      return state;
  }
};

export default user;
