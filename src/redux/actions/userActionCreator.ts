import User from "../../types/user-redux/user";
import { UserActionsTypes } from "../../types/user-redux/user-actions-types";

export const createSetUserAction = ({ id }: User) => {
  return {
    type: UserActionsTypes.SET_USER,
    payload: id,
  };
};
