import styled from "styled-components";
import { flexCenter, flexSpaceBetweenCenter } from "styles/common";

const Container = styled.form`
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 10px;
  width: 800px;
  padding: 60px;

  section {
    margin-bottom: 32px;
  }
`;
const Header = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.hg};
  font-weight: 800;
  margin-bottom: 24px;
`;

const Description = styled.div`
  margin-top: 16px;
  margin-bottom: 40px;
  ${flexSpaceBetweenCenter}
  color: ${({ theme }) => theme.PALETTE.gray[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  font-weight: 400;
`;

const Title = styled.section`
  input {
    width: 100%;
    height: 52px;
    padding: 0 16px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    box-shadow: 0 0 0 0px #bdddfd;
    transition: all 0.2s;
  }
  input:focus {
    border-color: ${({ theme }) => theme.PALETTE.primary[200]};
    box-shadow: 0 0 0 3px #bdddfd;
  }
`;

const Content = styled.section`
  textarea {
    width: 100%;
    height: 280px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    padding: 16px;
    resize: none;
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    outline: none;
    transition: all 0.2s;
  }
  textarea:focus {
    border-color: ${({ theme }) => theme.PALETTE.primary[200]};
    box-shadow: 0 0 0 3px #bdddfd;
  }
`;
const MoodScore = styled.section`
  & > div:last-child {
    ${flexCenter}
    gap: 32px;
  }
`;

const Subheading = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  font-weight: 800;
  margin-bottom: 16px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 24px;

  button {
    width: 100%;
    height: 52px;
    border-radius: 10px;
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
    font-weight: 700;
    margin-top: 64px;
  }
`;

export {
  Container,
  Header,
  Description,
  Title,
  Content,
  MoodScore,
  Subheading,
  Buttons,
};
