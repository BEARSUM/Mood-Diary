import Button from "components/common/Button";
import * as S from "./index.styled";

const PostItem = () => {
  return (
    <S.Container>
      <S.Row>
        <S.Mood>감정점수</S.Mood>
        <S.Date>날짜</S.Date>
      </S.Row>
      <S.Row>
        <S.Title>글 제목</S.Title>
        <S.Buttons>
          <Button color="blue">수정</Button>
          <Button color="red">삭제</Button>
        </S.Buttons>
      </S.Row>
    </S.Container>
  );
};

export default PostItem;
