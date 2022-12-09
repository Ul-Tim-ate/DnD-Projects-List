import User from "../../types/user-redux/user";
import { UserActionsTypes } from "../../types/user-redux/user-actions-types";

const a: User = { id: "" };

const initialState = {
  user: a,
};

const user = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case UserActionsTypes.SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default user;
