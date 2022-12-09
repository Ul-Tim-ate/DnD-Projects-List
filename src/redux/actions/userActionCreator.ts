import User from "../../types/user-redux/user";
import { UserActionsTypes } from "../../types/user-redux/user-actions-types";

export const createSetUserAction = (user: User) => {
  return {
    type: UserActionsTypes.SET_USER,
    payload: user,
  };
};
