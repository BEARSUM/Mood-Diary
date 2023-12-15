import * as S from "./index.styled";
import DiaryEditor from "./DiaryEditor";

const Home = () => {
  return (
    <S.Container>
      <div>캘린더</div>
      <DiaryEditor />
    </S.Container>
  );
};

export default Home;
