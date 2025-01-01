
import { useSelector } from "react-redux";
import { appDispatch, RootState } from "./store";
import { useDispatch } from "react-redux";


export const useAppSelector =useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<appDispatch>()