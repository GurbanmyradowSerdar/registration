import { atom } from "recoil";
import { TPageIndexState } from "../types";

export const pageIndexState = atom<TPageIndexState>({
  key: "pageIndex",
  default: 0,
});
