import styled from "styled-components";
import { flexColumnCenter } from "styles/common";

const Container = styled.div`
  width: 480px;
  ${flexColumnCenter}
  justify-content: center;
  gap: 24px;

  div {
    color: ${({ theme }) => theme.PALETTE.gray[100]};
    font-size: ${({ theme }) => theme.FONT_SIZE.lg};
    font-weight: 700;
  }
  button:hover {
    & > svg > path {
      stroke: ${({ theme }) => theme.PALETTE.mainColor};
    }
  }
`;

export { Container };
