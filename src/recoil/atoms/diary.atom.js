import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const diaryState = atom({
  key: "diaryState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const diaryIdState = atom({
  key: "diaryIdState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});
