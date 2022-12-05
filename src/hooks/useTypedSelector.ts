import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../components/redux/store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
