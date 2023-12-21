import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { diaryState } from "recoil/atoms/diary.atom";

import PostItem from "./PostItem";
import Button from "components/common/Button";
import Line from "components/common/Line";
import Nothing from "components/common/Nothing";

import { getDateFormat } from "utils/getDateFormat";

import * as S from "./index.styled";

const Mypage = () => {
  const diary = useRecoilValue(diaryState);
  const [data, setData] = useState([]); //선택된 월별 일기 데이터
  const [curDate, setCurDate] = useState(new Date());
  const { dateNoDay } = getDateFormat(curDate);

  useEffect(() => {
    const firstDate = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
    const lastDate = new Date(curDate.getFullYear(), curDate.getMonth() + 1, 0);

    setData(
      diary.filter(
        (it) => firstDate <= it.createdAt && lastDate >= it.createdAt
      )
    );
  }, [diary, curDate]);

  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1));
  };

  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1));
  };

  return (
    <S.Container>
      <S.Header>
        <S.Month>{dateNoDay} 통계</S.Month>
        <S.Buttons>
          <Button color="transparent" onClick={decreaseMonth}>
            <img src="/assets/img/left.svg" alt="left-icon" />
          </Button>
          <Button color="transparent" onClick={increaseMonth}>
            <img src="/assets/img/right.svg" alt="right-icon" />
          </Button>
        </S.Buttons>
      </S.Header>
      <Line />
      {data.length ? (
        <>
          <S.Number>
            총 <span>{data.length}</span>개의 일기
          </S.Number>
          <S.PostList>
            {data.map((el) => (
              <PostItem key={el.id} diary={el} />
            ))}
          </S.PostList>
        </>
      ) : (
        <S.NothingWrap>
          <Nothing page="mypage" />
        </S.NothingWrap>
      )}
    </S.Container>
  );
};

export default Mypage;
