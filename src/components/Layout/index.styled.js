import styled from "styled-components";
import { flexCenter, flexColumnCenter } from "styles/common";

const Container = styled.div`
  background-img: url("/public/assets/background/background");
  ${flexColumnCenter}

  main {
    ${flexCenter}
    padding: 32px 0;

    @media (min-width: 1224px) {
      width: 1080px;
    }
  }
`;

export { Container };
