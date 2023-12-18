import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 56px 72px;

  border-radius: 10px;
  display: flex;
  gap: 56px;

  & > div:first-child {
    width: 420px;
  }
`;
const Diary = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export { Container, Diary };
