import { useState, useRef, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { diaryDateState } from "recoil/atoms/date.atom";
import { diaryState } from "recoil/atoms/diary.atom";

import Line from "components/common/Line";
import MoodItem from "./MoodItem";

import * as S from "./index.styled";

const DiaryEditor = () => {
  const [diary, setDiary] = useRecoilState(diaryState);

  const selectedDate = useRecoilValue(diaryDateState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState(1);

  const titleInput = useRef();
  const contentInput = useRef();

  const dataId = useRef(0); //초기화 방지

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length < 1) {
      titleInput.current.focus();
      return;
    }

    if (content.length < 1) {
      contentInput.current.focus();
      return;
    }

    setDiary([
      ...diary,
      { id: dataId.current, title, content, mood, createdAt: selectedDate },
    ]);
    dataId.current += 1;
    alert("일기가 성공적으로 저장되었습니다!");
  };
  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Header>오늘의 일기</S.Header>
      <Line />

      <S.Description>
        <div>오늘은 어떤 하루를 보내셨나요? :)</div>
        <div>{selectedDate}</div>
      </S.Description>

      <S.Title>
        <S.Subheading>제목</S.Subheading>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleInput}
        />
      </S.Title>

      <S.Content>
        <S.Subheading>내용</S.Subheading>
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          ref={contentInput}
        />
      </S.Content>

      <S.MoodScore>
        <S.Subheading>오늘의 감정 점수</S.Subheading>
        <S.Mood>
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <MoodItem
                index={i}
                isSelected={i + 1 === mood}
                onClick={() => setMood(i + 1)}
              />
            ))}
        </S.Mood>
      </S.MoodScore>

      <S.SaveBtn type="submit">저장하기</S.SaveBtn>
    </S.Container>
  );
};

export default DiaryEditor;
