import styled from "styled-components";
import { flexSpaceBetweenCenter } from "styles/common";

const Container = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 10px;
  padding: 54px 48px;
  margin: 0 64px;
`;
const Header = styled.header`
  ${flexSpaceBetweenCenter}
  font-weight: 700;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  margin-bottom: 24px;
`;
const Number = styled.div`
  color: ${({ theme }) => theme.PALETTE.gray[200]};
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  margin-bottom: 24px;
  span {
    font-weight: 500;
  }
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
export { Container, Header, PostList, Number };
