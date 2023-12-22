import styled from "styled-components";
import { flexSpaceBetweenCenter } from "styles/common";

const Container = styled.div`
  ${flexSpaceBetweenCenter}
  gap: 16px;
  padding: 24px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
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
`;

export { Container, Diary, Col, Date, Title, Buttons };
