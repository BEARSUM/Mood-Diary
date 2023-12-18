import { useRecoilValue } from "recoil";
import { diaryState } from "recoil/atoms/diary.atom";

import PostItem from "./PostItem";

import * as S from "./index.styled";

const Mypage = () => {
  const diary = useRecoilValue(diaryState);
  return (
    <S.Container>
      <S.Header>
        <div>일기 관리</div>
        <S.Number>
          총 <span>{diary.length}</span>개의 일기
        </S.Number>
      </S.Header>
      <S.PostList>
        {diary.map((el) => (
          <PostItem key={el.id} diary={el} />
        ))}
      </S.PostList>
    </S.Container>
  );
};

export default Mypage;
