import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { diaryDateState } from "recoil/atoms/date.atom";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

import { getDateFormat } from "utils/getDateFormat";
import * as S from "./index.styled";

const ReactCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [_, setSelectedDate] = useRecoilState(diaryDateState);

  useEffect(() => {
    const { dateString, dayName } = getDateFormat(value);
    setSelectedDate(`${dateString} ${dayName}`);
  }, [value]);

  return (
    <S.Container>
      <Calendar
        formatDay={(_, date) => moment(date).format("DD")}
        onChange={onChange}
        value={value}
        tileContent={({ date, view }) => {
          if (true) {
            return <img src="/assets/img/emotion1.png" alt="mood" />;
          }
        }}
      />
    </S.Container>
  );
};
export default ReactCalendar;
