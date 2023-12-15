import Line from "components/common/Line";

import * as S from "./index.styled";

const DiaryEditor = () => {
  return (
    <S.Container>
      <S.Header>오늘의 일기</S.Header>
      <Line />
      <S.Description>
        <div>오늘은 어떤 하루를 보내셨나요? :)</div>
        <div>2023.10.11</div>
      </S.Description>
      <S.Title>
        <S.Subheading>제목</S.Subheading>
        <input className="title" type="text" />
      </S.Title>
      <S.Content>
        <S.Subheading>내용</S.Subheading>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </S.Content>
      <S.MoodScore>
        <S.Subheading htmlFor="moodScore">오늘의 감정 점수</S.Subheading>
        <select name="moodScore" id="moodScore">
          <option value="sad">1</option>
          <option value="fine">2</option>
          <option value="grate">3</option>
        </select>
      </S.MoodScore>
      <S.SaveBtn>저장하기</S.SaveBtn>
    </S.Container>
  );
};

export default DiaryEditor;
