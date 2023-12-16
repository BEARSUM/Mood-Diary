import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 10px;
  padding: 32px;
  margin: 0 64px;

  header {
    font-weight: 700;
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    margin-bottom: 48px;
  }
`;
const Number = styled.div`
  font-weight: 400;
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  margin-bottom: 24px;
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
export { Container, PostList, Number };
