import { useState, useRef, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { diaryDateState } from "recoil/atoms/date.atom";
import { diaryState, diaryIdState } from "recoil/atoms/diary.atom";

import Line from "components/common/Line";
import Button from "components/common/Button";
import MoodItem from "./MoodItem";

import { getDateFormat } from "utils/getDateFormat";

import * as S from "./index.styled";
import { useNavigate } from "react-router-dom";

const DiaryEditor = ({ isEdit, originData }) => {
  const [diary, setDiary] = useRecoilState(diaryState);
  const [diaryId, setDiaryId] = useRecoilState(diaryIdState);

  const selectedDate = useRecoilValue(diaryDateState);
  const { dateString, dayName } = getDateFormat(selectedDate);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState(1);

  const titleInput = useRef();
  const contentInput = useRef();

  const handleClickMoodItem = useCallback((i) => {
    setMood(i + 1);
  }, []);

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

    if (!isEdit) {
      const newItem = {
        id: diaryId,
        title,
        content,
        mood,
        createdAt: selectedDate,
      };
      setDiary([newItem, ...diary]);
      setDiaryId((prev) => prev + 1);
    } else {
      const editedItem = {
        id: originData.id,
        title,
        content,
        mood,
        createdAt: originData.createdAt,
      };
      const editedData = diary.map((it) =>
        it.id === originData.id ? editedItem : it
      );
      setDiary(editedData);
    }

    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(originData.title);
      setContent(originData.content);
      setMood(originData.mood);
    }
  }, [isEdit, originData]);

  const navigate = useNavigate();
  return (
    <S.Container onSubmit={handleSubmit}>
      <S.Header>오늘의 일기</S.Header>
      <Line />

      <S.Description>
        <div>오늘은 어떤 하루를 보내셨나요? :)</div>
        <div>{dateString + " " + dayName}</div>
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
        <div>
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <MoodItem
                key={`mood-${i + 1}`}
                index={i}
                isSelected={i + 1 === mood}
                onClick={handleClickMoodItem}
              />
            ))}
        </div>
      </S.MoodScore>
      <S.Buttons>
        <Button color="reverse" onClick={() => navigate(-1)}>
          취소
        </Button>
        <Button color="basic" type="submit">
          저장하기
        </Button>
      </S.Buttons>
    </S.Container>
  );
};

export default DiaryEditor;
