import * as S from "./index.styled";
import DiaryEditor from "./DiaryEditor";
import ReactCalendar from "./Calendar";

const Home = () => {
  return (
    <S.Container>
      <ReactCalendar />
      <DiaryEditor />
    </S.Container>
  );
};

export default Home;
