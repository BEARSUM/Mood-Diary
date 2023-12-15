import styled from "styled-components";
import { flexSpaceBetweenCenter } from "styles/common";

const Container = styled.form`
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 10px;
  width: 588px;
  padding: 60px;
`;
const Header = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.hg};
  font-weight: 800;
  margin-bottom: 24px;
`;
const Description = styled.div`
  margin-top: 16px;
  ${flexSpaceBetweenCenter}
  color: ${({ theme }) => theme.PALETTE.gray[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  font-weight: 400;
`;
const Title = styled.div`
  margin-top: 40px;
  margin-bottom: 24px;

  input {
    width: 100%;
    height: 52px;
    padding: 0 16px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    box-shadow: 0 0 0 0px #bdddfd;
    transition: all 0.2s;

    &::placeholder {
      color: ${({ theme }) => theme.PALETTE.gray[100]};
      font-weight: 700;
      font-size: ${({ theme }) => theme.FONT_SIZE.md};
    }
    &:focus {
      border-color: ${({ theme }) => theme.PALETTE.primary[200]};
      box-shadow: 0 0 0 3px #bdddfd;
    }
  }
`;
const Content = styled.div`
  margin-bottom: 24px;

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

    &:focus {
      border-color: ${({ theme }) => theme.PALETTE.primary[200]};
      box-shadow: 0 0 0 3px #bdddfd;
    }
  }
`;
const MoodScore = styled.div`
  select {
    width: 100%;
    height: 52px;
    padding: 0 16px;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    box-shadow: 0 0 0 0px #bdddfd;
    transition: all 0.2s;
  }
`;
const Subheading = styled.div`
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  font-weight: 800;
  margin-bottom: 16px;
`;
const SaveBtn = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  font-weight: 700;
  margin-top: 64px;
`;

export {
  Container,
  Header,
  Description,
  Title,
  Content,
  MoodScore,
  Subheading,
  SaveBtn,
};
