import Line from "components/common/Line";

import * as S from "./index.styled";

const PostDetail = ({ diary }) => {
  const { title, content, mood, createdAt } = diary;

  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <img src={`/assets/img/emotion${mood}.png`} alt="mood" />
      </S.Header>
      <Line />
      <S.Date>{createdAt}</S.Date>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};

export default PostDetail;
