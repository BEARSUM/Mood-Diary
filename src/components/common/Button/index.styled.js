import styled, { css } from "styled-components";

export const colorCSS = {
  blue: css`
    background: ${({ theme }) => theme.PALETTE.white};
    border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
    color: ${({ theme }) => theme.PALETTE.mainColor};
  `,
  red: css`
    background: ${({ theme }) => theme.PALETTE.white};
    border: 1px solid ${({ theme }) => theme.PALETTE.error};
    color: ${({ theme }) => theme.PALETTE.error};
  `,
};
export const Button = styled.button`
  ${({ color }) => color && colorCSS[color]}

  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  padding: 8px 18px;
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
`;
