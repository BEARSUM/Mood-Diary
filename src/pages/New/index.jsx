import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { diaryState } from "recoil/atoms/diary.atom";

import DiaryEditor from "components/common/DiaryEditor";

import { getDateFormat } from "utils/getDateFormat";

import * as S from "./index.styled";

const New = () => {
  const diary = useRecoilValue(diaryState);

  return (
    <S.Container>
      <DiaryEditor />
    </S.Container>
  );
};

export default New;
