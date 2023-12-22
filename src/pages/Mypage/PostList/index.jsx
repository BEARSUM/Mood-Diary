import { useEffect, useState } from "react";

import PostItem from "./PostItem";

import * as S from "./index.styled";

const PostList = ({ data, onChange }) => {
  const [sortType, setSortType] = useState("latest");

  const compare = (a, b) => {
    if (sortType === "latest") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  };

  useEffect(() => {
    onChange(data.sort((a, b) => compare(a, b)));
  }, [sortType]);

  return (
    <>
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
      <S.List>
        {data.map((el) => (
          <PostItem key={el.id} diary={el} />
        ))}
      </S.List>
    </>
  );
};

export default PostList;
