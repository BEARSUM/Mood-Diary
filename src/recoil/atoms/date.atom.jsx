import { atom } from "recoil";
import { getDateFormat } from "utils/getDateFormat";
const { dateString, dayName } = getDateFormat(new Date());

export const diaryDateState = atom({
  key: "diaryDateState",
  default: `${dateString} ${dayName}`,
});
