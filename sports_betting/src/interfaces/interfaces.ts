import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "toolkitRedux";

export interface Idata {
  id: number;
  team1: string;
  img1: string;
  team2: string;
  img2: string;
  time: string;
  date: string;
  П1: number;
  X: number;
  П2: number;
}
export interface TeamProps {
  team: Idata;
}
export interface Ibetting {
  bid: { result: string };
  team: Idata[];
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
