import { useState, useRef } from "react";

import Line from "components/common/Line";

import * as S from "./index.styled";

const PostDetail = () => {
  const [diaryState, setDiaryState] = useState({
    title: "",
    content: "",
    mood: 1,
  });
  const titleInput = useRef();
  const contentInput = useRef();

  const handleChangeDiary = (e) => {
    setDiaryState({ ...diaryState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (diaryState.title.length < 1) {
      titleInput.current.focus();
      return;
    }

    if (diaryState.content.length < 1) {
      contentInput.current.focus();
      return;
    }

    alert("일기가 성공적으로 저장되었습니다!");
  };
  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Header>
        <S.Title>글 제목</S.Title>
        <img src="/assets/img/emotion1.png" alt="mood" />
      </S.Header>
      <Line />
      <S.Date>2023.10.11</S.Date>

      <S.Content>내용내용내용내용내용내용내용내용내용내용</S.Content>
    </S.Container>
  );
};

export default PostDetail;
