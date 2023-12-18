import * as S from "./index.styled";

const MoodItem = ({ index, isSelected, onClick }) => {
  return (
    <S.Container index={index} isSelected={isSelected} onClick={onClick}>
      <img
        src={`/assets/img/emotion${index + 1}.png`}
        alt={`mood${index + 1}`}
      />
    </S.Container>
  );
};

export default MoodItem;
