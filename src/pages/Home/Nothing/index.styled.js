import styled from "styled-components";
import { flexColumnCenter } from "styles/common";

const Container = styled.form`
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 10px;
  width: 480px;

  ${flexColumnCenter}
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
