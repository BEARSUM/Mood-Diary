import styled from "styled-components";
import { media } from "styles/media";

const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
  border-radius: 10px;
  padding: 24px 42px;
  margin-bottom: 48px;

  & > div:last-child {
    border-bottom: none;
  }

  ${media.large`
    padding: 24px 42px;
    `}
  ${media.medium`
    padding: 24px 16px;
  `}
    ${media.small`
    padding: 24px 16px;
  `}
`;

export { Container };
