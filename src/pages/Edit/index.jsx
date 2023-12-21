import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { diaryState } from "recoil/atoms/diary.atom";

import DiaryEditor from "components/common/DiaryEditor";

import * as S from "./index.styled";

const Edit = () => {
  const { id } = useParams();

  const [originData, setOriginData] = useState({});
  const diary = useRecoilValue(diaryState);

  const navigate = useNavigate();

  useEffect(() => {
    if (!diary.length) navigate("/", { replace: true });

    const targetDiary = diary.find((it) => it.id == id);

    if (targetDiary) {
      setOriginData(targetDiary);
    } else {
      navigate("/", { replace: true });
    }

    console.log(id);
  }, [id, diary]);

  return (
    <S.Container>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </S.Container>
  );
};

export default Edit;
