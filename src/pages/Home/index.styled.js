import styled from "styled-components";
import { media } from "styles/media";

const Container = styled.div`
  min-width: 320px;
  background-color: white;

  border-radius: 10px;
  display: flex;

  width: 100%;
  padding: 40px 56px;
  gap: 56px;

  & > div {
    width: 50%;
    padding: 0 16px;
  }
  ${media.large`
  width:100%;
  padding: 40px 32px;
  gap: 24px;
    & > div {
    width: 50%;
  }
  `}
  ${media.medium`
  width:100%;
  padding: 32px 0;
  flex-direction: column;
  align-items: center;
  gap:8px;
  & > div {
    width: 84%;
  }
`}
  ${media.small`
  width:100%;
  padding: 24px 0;
  flex-direction: column;
  align-items: center;
  gap:8px;
  & > div {
    width: 90%;
  }
`}
`;
const Diary = styled.div`
  width: 50%;

  height: 450px;
  display: flex;
  justify-content: center;
`;

export { Container, Diary };
