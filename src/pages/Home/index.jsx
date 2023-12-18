import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { diaryDateState } from "recoil/atoms/date.atom";
import { diaryState } from "recoil/atoms/diary.atom";

import ReactCalendar from "./Calendar";
import PostDetail from "./PostDetail";
import Nothing from "./Nothing";

import * as S from "./index.styled";

const Home = () => {
  const diary = useRecoilValue(diaryState);
  const [selectedDate, setSelectedDate] = useRecoilState(diaryDateState);
  const [selectedDiary, setSelectedDiary] = useState({});

  useEffect(() => {
    const targetDiary = diary.find((it) => it.createdAt === selectedDate);
    setSelectedDiary(targetDiary);
  }, [selectedDate]);

  return (
    <S.Container>
      <ReactCalendar onSelect={setSelectedDate} />
      <S.Diary>
        {!!selectedDiary ? <PostDetail diary={selectedDiary} /> : <Nothing />}
      </S.Diary>
    </S.Container>
  );
};

export default Home;
