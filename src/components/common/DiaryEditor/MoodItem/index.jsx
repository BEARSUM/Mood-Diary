import React from "react";

import * as S from "./index.styled";

const MoodItem = ({ index, isSelected, onClick }) => {
  return (
    <S.Container
      index={index}
      isSelected={isSelected}
      onClick={() => onClick(index)}
    >
      <img
        src={`/assets/img/emotion${index + 1}.png`}
        alt={`mood${index + 1}`}
      />
    </S.Container>
  );
};

export default React.memo(MoodItem);
