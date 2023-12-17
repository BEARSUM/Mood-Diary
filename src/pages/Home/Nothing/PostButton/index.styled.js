import styled from "styled-components";

const Container = styled.button`
  background: ${({ theme }) => theme.PALETTE.white};

  button:hover {
    & > svg > path {
      stroke: ${({ theme }) => theme.PALETTE.mainColor};
    }
  }
`;

export { Container };
