import styled from "styled-components";
import { flexSpaceBetweenCenter } from "styles/common";

const Container = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.white};
  border-radius: 10px;
  width: 480px;
  padding: 24px 0;
`;
const Header = styled.div`
  ${flexSpaceBetweenCenter}
  margin-bottom: 16px;
  img {
    width: 36px;
    margin-right: 10px;
  }
`;
const Date = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.PALETTE.gray[200]};
  font-size: ${({ theme }) => theme.FONT_SIZE.md};
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 32px;
`;
const Title = styled.div`

  font-size: ${({ theme }) => theme.FONT_SIZE.hg};
  font-weight: 800;
  }
`;
const Content = styled.div`
  margin-bottom: 24px;
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

export { Container, Header, Date, Title, Content, MoodScore, Subheading };
