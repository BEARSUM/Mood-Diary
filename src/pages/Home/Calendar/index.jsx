import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

import * as S from "./index.styled";

const ReactCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <S.Container>
      <Calendar
        formatDay={(locale, date) => moment(date).format("DD")}
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
