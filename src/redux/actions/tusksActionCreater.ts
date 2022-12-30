import { TusksActionTypes } from "../../types/tusks/tusks-actions";
import { TusksState } from "../reducers/tusks";

export const setTusksAction = (tuskList: TusksState) => {
  return { type: TusksActionTypes.SET_TUSKS, payload: tuskList };
};
