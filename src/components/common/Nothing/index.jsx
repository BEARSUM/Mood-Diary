import { useNavigate } from "react-router-dom";
import * as S from "./index.styled";
import PostButton from "./PostButton";

const Nothing = ({ page }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/new");
  };
  const content = {
    home: "오늘의 감정을 기록해 보세요.",
    mypage: "이 달에 기록된 일기가 없습니다.",
  };

  return (
    <S.Container>
      {page === "home" ? (
        <PostButton onClick={handleClick} />
      ) : (
        <img src="/assets/img/nothing.svg" alt="" />
      )}
      <div>{content[page]}</div>
    </S.Container>
  );
};

export default Nothing;
