import styled from "styled-components";
import { flexSpaceBetweenCenter } from "styles/common";
import { media } from "styles/media";

const Container = styled.header`
  width: 100%;
  height: 90px;
  padding: 24px 64px;
  ${flexSpaceBetweenCenter}

  button {
    padding: 0;
  }
  picture {
    display: flex;
    align-items: center;
  }

  ${media.small`
  padding: 24px;
`}
`;

export { Container };
