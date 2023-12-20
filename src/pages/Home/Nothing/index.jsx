import { useNavigate } from "react-router-dom";
import * as S from "./index.styled";
import PostButton from "./PostButton";

const Nothing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new");
  };
  return (
    <S.Container>
      <PostButton onClick={handleClick} />
      <div>오늘의 감정을 기록해 보세요.</div>
    </S.Container>
  );
};

export default Nothing;
