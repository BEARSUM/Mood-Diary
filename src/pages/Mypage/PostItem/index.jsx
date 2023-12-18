import Button from "components/common/Button";

import { getDateFormat } from "utils/getDateFormat";

import * as S from "./index.styled";

const PostItem = ({ diary }) => {
  const { title, mood, createdAt } = diary;
  const { dateString, dayName } = getDateFormat(createdAt);
  return (
    <S.Container>
      <S.Col>
        <img src={`/assets/img/emotion${mood}.png`} alt="mood" />
        <S.Diary>
          <S.Title>{title}</S.Title>
          <S.Date>{dateString + " " + dayName}</S.Date>
        </S.Diary>
      </S.Col>
      <S.Buttons>
        <Button color="reverse">수정</Button>
        <Button color="cancel">삭제</Button>
      </S.Buttons>
    </S.Container>
  );
};

export default PostItem;
