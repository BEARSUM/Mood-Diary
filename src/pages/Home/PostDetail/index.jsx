import Line from "components/common/Line";

import { getDateFormat } from "utils/getDateFormat";

import * as S from "./index.styled";

const PostDetail = ({ diary }) => {
  const { title, content, mood, createdAt } = diary;
  const { dateString, dayName } = getDateFormat(createdAt);

  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <img src={`/assets/img/emotion${mood}.png`} alt="mood" />
      </S.Header>
      <Line />
      <S.Date>{dateString + " " + dayName}</S.Date>
      <S.Content>{content}</S.Content>
    </S.Container>
  );
};

export default PostDetail;
