import { atom } from "recoil";

export const diaryState = atom({
  key: "diaryState",
  default: [],
});

export const diaryIdState = atom({
  key: "diaryIdState",
  default: 0,
});
