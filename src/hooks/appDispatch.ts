import { useDispatch } from "react-redux";
import { AppDispatch } from "../store1/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
