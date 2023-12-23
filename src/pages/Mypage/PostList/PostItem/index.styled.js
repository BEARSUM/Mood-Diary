import styled from "styled-components";
import { flexSpaceBetweenCenter } from "styles/common";
import { media } from "styles/media";

const Container = styled.div`
  ${flexSpaceBetweenCenter}
  gap: 16px;
  padding: 24px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};

  ${media.large`
    `}
  ${media.medium`
  `}
    ${media.small`
    flex-direction: column;
  `}
`;

const Diary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  img {
    width: 42px;
  }

  ${media.small`
    width:100%;
    justify-content: flex-start;
  `}
`;

const Date = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  color: ${({ theme }) => theme.PALETTE.gray[200]};
`;

const Title = styled.div`
  font-weight: 500;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

const Buttons = styled.div`
  display: flex;
  gap: 8px;
  ${media.small`
    width:100%;
    justify-content: flex-end;
  `}
`;

export { Container, Diary, Col, Date, Title, Buttons };
