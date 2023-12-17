import * as S from "./index.styled";
import ReactCalendar from "./Calendar";
import PostDetail from "./PostDetail";

const Home = () => {
  return (
    <S.Container>
      <ReactCalendar />
      <PostDetail />
    </S.Container>
  );
};

export default Home;
