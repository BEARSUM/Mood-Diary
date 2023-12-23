import styled from "styled-components";
import { flexColumnCenter, flexSpaceBetweenCenter } from "styles/common";

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 10px;
  padding: 40px 48px;
`;
const Header = styled.header`
  ${flexSpaceBetweenCenter}
  margin-bottom: 24px;
`;

const Month = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
`;

const Buttons = styled.div`
  display: flex;
  gap: 32px;
  margin-right: 16px;
  button {
    padding: 0;
  }
`;
const ChartWrap = styled.div`
  & > div:last-child {
    padding: 24px 0;
    border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
    border-radius: 10px;
    ${flexColumnCenter}
  }
`;
const ChartHeader = styled.div`
  color: ${({ theme }) => theme.PALETTE.black};
  font-weight: 600;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  margin-top: 24px;
  margin-bottom: 16px;
`;
const ListHeader = styled.div`
  ${flexSpaceBetweenCenter}
  margin-top: 24px;
  margin-bottom: 8px;
`;
const Number = styled.div`
  color: ${({ theme }) => theme.PALETTE.black};
  font-weight: 600;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  span {
    color: ${({ theme }) => theme.PALETTE.gray[100]};
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
const NothingWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export {
  Container,
  Header,
  ChartWrap,
  ChartHeader,
  Month,
  Buttons,
  ListHeader,
  List,
  Number,
  Sort,
  SortType,
  NothingWrap,
};
