import { useState } from "react";

import Line from "components/common/Line";

import * as S from "./index.styled";

const DiaryEditor = () => {
  const [diaryState, setDiaryState] = useState({
    title: "",
    content: "",
    mood: 1,
  });

  const handleChangeDiary = (e) => {
    setDiaryState({ ...diaryState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("일기가 성공적으로 저장되었습니다!");
  };
  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Header>오늘의 일기</S.Header>
      <Line />
      <S.Description>
        <div>오늘은 어떤 하루를 보내셨나요? :)</div>
        <div>2023.10.11</div>
      </S.Description>
      <S.Title>
        <S.Subheading>제목</S.Subheading>
        <input
          name="title"
          value={diaryState.title}
          onChange={handleChangeDiary}
        />
      </S.Title>
      <S.Content>
        <S.Subheading>내용</S.Subheading>
        <textarea
          name="content"
          value={diaryState.content}
          onChange={handleChangeDiary}
        />
      </S.Content>
      <S.MoodScore>
        <S.Subheading>오늘의 감정 점수</S.Subheading>
        <select
          name="mood"
          value={diaryState.mood}
          onChange={handleChangeDiary}
        >
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
        </select>
      </S.MoodScore>
      <S.SaveBtn type="submit">저장하기</S.SaveBtn>
    </S.Container>
  );
};

export default DiaryEditor;
