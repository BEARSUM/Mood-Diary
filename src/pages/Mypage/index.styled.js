import styled from "styled-components";
import { flexSpaceBetweenCenter } from "styles/common";

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
const PostList = styled.div`
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
  Month,
  Buttons,
  ListHeader,
  PostList,
  Number,
  Sort,
  SortType,
  NothingWrap,
};
