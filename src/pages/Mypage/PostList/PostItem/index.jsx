import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { diaryState } from "recoil/atoms/diary.atom";

import Button from "components/common/Button";

import { getDateFormat } from "utils/getDateFormat";

import * as S from "./index.styled";

const PostItem = ({ diary }) => {
  const { id, title, mood, createdAt } = diary;
  const { dateString, dayName } = getDateFormat(createdAt);

  const [data, setData] = useRecoilState(diaryState);

  const navigate = useNavigate();

  const removeDiary = () => {
    setData(data.filter((it) => it.id !== id));
  };

  const editDiary = () => {
    navigate(`/edit/${id}`);
  };

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
        <Button color="reverse" onClick={editDiary}>
          수정
        </Button>
        <Button color="cancel" onClick={removeDiary}>
          삭제
        </Button>
      </S.Buttons>
    </S.Container>
  );
};

export default PostItem;
