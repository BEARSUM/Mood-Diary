import styled from "styled-components";
import { flexSpaceBetweenCenter } from "styles/common";

const ListHeader = styled.div`
  ${flexSpaceBetweenCenter}
  margin-top: 40px;
  margin-bottom: 8px;
`;

const Number = styled.div`
  color: ${({ theme }) => theme.PALETTE.gray[200]};
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  span {
    font-weight: 500;
  }
`;

const Sort = styled.div`
  display: flex;
`;

const SortType = styled.div`
  color: ${({ isClicked }) => (isClicked ? "#1f1f1f" : "#898989")};
  font-weight: ${({ isClicked }) => (isClicked ? 500 : 400)};
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  padding: 8px;
  cursor: pointer;
`;

const List = styled.div`
  border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
  border-radius: 10px;
  padding: 24px 42px;
  margin-bottom: 48px;

  & > div:last-child {
    border-bottom: none;
  }
`;

export { ListHeader, List, Number, Sort, SortType };
