import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const ReactCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};
export default ReactCalendar;
