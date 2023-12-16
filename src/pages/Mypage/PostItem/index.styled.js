import styled from "styled-components";
import { flexColumnCenter, flexSpaceBetweenCenter } from "styles/common";

const Container = styled.div`
  padding: 24px 16px;
  ${flexColumnCenter}
  gap: 16px;

  border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
`;
const Row = styled.div`
  width: 100%;
  ${flexSpaceBetweenCenter}
`;
const Mood = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.xs};
  color: ${({ theme }) => theme.PALETTE.mainColor};
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

export { Container, Row, Mood, Date, Title, Buttons };
