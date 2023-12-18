import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { diaryState } from "recoil/atoms/diary.atom";
import { diaryDateState } from "recoil/atoms/date.atom";

import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

import * as S from "./index.styled";

const ReactCalendar = () => {
  const diary = useRecoilValue(diaryState);

  const [value, onChange] = useState(new Date());
  const [_, setSelectedDate] = useRecoilState(diaryDateState);

  useEffect(() => {
    setSelectedDate(value);
  }, [value]);

  return (
    <S.Container>
      <Calendar
        formatDay={(_, date) => moment(date).format("DD")}
        onChange={onChange}
        value={value}
        tileContent={({ date, view }) => {
          const diaryData = diary.find(
            (it) =>
              moment(it.createdAt).format("YYYY-MM-DD") ===
              moment(date).format("YYYY-MM-DD")
          );
          if (diaryData) {
            return (
              <img
                src={`/assets/img/emotion${diaryData.mood}.png`}
                alt="mood"
              />
            );
          }
        }}
      />
    </S.Container>
  );
};
export default ReactCalendar;
