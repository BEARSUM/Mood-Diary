import Button from "components/common/Button";
import * as S from "./index.styled";

const PostItem = ({ diary }) => {
  const { title, mood, createdAt } = diary;

  return (
    <S.Container>
      <S.Row>
        <S.Mood>{mood}</S.Mood>
        <S.Date>{createdAt}</S.Date>
      </S.Row>
      <S.Row>
        <S.Title>{title}</S.Title>
        <S.Buttons>
          <Button color="blue">수정</Button>
          <Button color="red">삭제</Button>
        </S.Buttons>
      </S.Row>
    </S.Container>
  );
};

export default PostItem;
