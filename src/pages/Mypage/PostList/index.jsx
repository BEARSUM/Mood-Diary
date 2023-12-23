import { useEffect } from "react";

import PostItem from "./PostItem";

import * as S from "./index.styled";

const PostList = ({ data, onChange, sortType }) => {
  const compare = (a, b) => {
    if (sortType === "old") {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  };

  useEffect(() => {
    const sortedData = [...data].sort((a, b) => compare(a, b));
    onChange(sortedData);
  }, [sortType]);

  return (
    <S.Container>
      {data.map((el) => (
        <PostItem key={el.id} diary={el} />
      ))}
    </S.Container>
  );
};

export default PostList;
