import { useNavigate } from "react-router-dom";

import Button from "components/common/Button";

import * as S from "./index.styled";

function Header() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <Button color="transparent" onClick={() => navigate("/")}>
        <img alt="mooddiary-logo" src="/assets/img/logo.svg" />
      </Button>
      <Button color="transparent" onClick={() => navigate("/mypage")}>
        <img alt="mypage" src="/assets/img/mypage.svg" />
      </Button>
    </S.Container>
  );
}

export default Header;
