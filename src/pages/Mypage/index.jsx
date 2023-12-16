import PostItem from "./PostItem";
import * as S from "./index.styled";

const Mypage = () => {
  return (
    <S.Container>
      <header>일기 관리</header>
      <S.Number>총 26개의 일기</S.Number>
      <S.PostList>
        <PostItem />
        <PostItem />
      </S.PostList>
    </S.Container>
  );
};

export default Mypage;
