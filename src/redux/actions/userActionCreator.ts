import User from "../../types/user/user";
import { UserActionsTypes } from "../../types/user/user-actions-types";

export const createSetUserAction = (user: User) => {
  return {
    type: UserActionsTypes.SET_USER,
    payload: user,
  };
};
