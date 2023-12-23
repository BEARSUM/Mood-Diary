import styled from "styled-components";
import { flexColumnCenter } from "styles/common";
import { media } from "styles/media";

const Container = styled.div`
  ${flexColumnCenter}
  background-img: url("/public/assets/background/background");
  justify-content: center;
  align-items: center;

  main {
    min-width: 320px;
    padding: 32px 0;
    width: 75%;

    ${media.large`
    width: 85%;
    `}
    ${media.medium`
    width: 70%;
  `}
    ${media.small`
    width: 95%;
  `}
  }
`;

export { Container };
