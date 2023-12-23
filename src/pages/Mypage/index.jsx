import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { diaryState } from "recoil/atoms/diary.atom";

import PostList from "./PostList";
import Button from "components/common/Button";
import Line from "components/common/Line";
import Nothing from "components/common/Nothing";

import { getDateFormat } from "utils/getDateFormat";

import * as S from "./index.styled";

const Mypage = () => {
  const diary = useRecoilValue(diaryState);
  const [data, setData] = useState([]); //선택된 월별 일기 데이터
  const [curDate, setCurDate] = useState(new Date());
  const [sortType, setSortType] = useState("latest");

  const { dateNoDay } = getDateFormat(curDate);

  const increaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() + 1));
  };

  const decreaseMonth = () => {
    setCurDate(new Date(curDate.getFullYear(), curDate.getMonth() - 1));
  };

  useEffect(() => {
    setSortType("latest");

    const firstDate = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();

    const lastDate = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      0,
      23,
      59,
      59
    ).getTime();

    setData(
      diary.filter(
        (it) =>
          firstDate <= new Date(it.createdAt).getTime() &&
          lastDate >= new Date(it.createdAt).getTime()
      )
    );
  }, [diary, curDate]);

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `mood diary - mypage`;
  }, []);
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
      <S.ListHeader>
        <S.Number>
          총 <span>{data.length}</span>개의 일기
        </S.Number>
        <S.Sort>
          <S.SortType
            onClick={() => setSortType("latest")}
            isClicked={sortType === "latest"}
          >
            최신순
          </S.SortType>
          <S.SortType
            onClick={() => setSortType("old")}
            isClicked={sortType === "old"}
          >
            오래된순
          </S.SortType>
        </S.Sort>
      </S.ListHeader>
      {data.length ? (
        <PostList data={data} onChange={setData} sortType={sortType} />
      ) : (
        <S.NothingWrap>
          <Nothing page="mypage" />
        </S.NothingWrap>
      )}
    </S.Container>
  );
};

export default Mypage;
