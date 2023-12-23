import styled, { css } from "styled-components";
import { flexCenter } from "styles/common";

export const colorCSS = {
  basic: css`
    background: ${({ theme }) => theme.PALETTE.mainColor};
    color: ${({ theme }) => theme.PALETTE.white};
  `,
  reverse: css`
    background: ${({ theme }) => theme.PALETTE.white};
    border: 1px solid ${({ theme }) => theme.PALETTE.mainColor};
    color: ${({ theme }) => theme.PALETTE.mainColor};
  `,
  cancel: css`
    background: ${({ theme }) => theme.PALETTE.white};
    border: 1px solid ${({ theme }) => theme.PALETTE.error};
    color: ${({ theme }) => theme.PALETTE.error};
  `,
  transparent: css`
    background: transparent;
  `,
};
export const Button = styled.button`
  ${({ color }) => color && colorCSS[color]}
  ${flexCenter}
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  padding: 8px 18px;
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  white-space: nowrap;
`;
