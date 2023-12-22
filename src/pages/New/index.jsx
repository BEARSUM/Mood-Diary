import { useEffect } from "react";

import DiaryEditor from "components/common/DiaryEditor";

import * as S from "./index.styled";

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `mood diary - new diary`;
  }, []);

  return (
    <S.Container>
      <DiaryEditor />
    </S.Container>
  );
};

export default New;
