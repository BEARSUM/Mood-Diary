import styled from "styled-components";
import { media } from "styles/media";

const color = ["#64c964", "#9dd672", "#fdce15", "#fd8345", "#fd565f"];

const Container = styled.div`
  border-radius: 10px;
  border: 1px solid #d9d9d9;
  background-color: ${({ index, isSelected }) =>
    isSelected ? color[index] : "#ffffff"};

  img {
    width: 108px;
    height: 108px;
    padding: 24px;
  }

  &:hover {
    background-color: ${({ index }) => color[index]};
    border: 1px solid ${({ index }) => color[index]};
  }

  ${media.medium`
  img {
    width: 72px;
    height: 72px;
    padding: 8px;
  }
`}
`;

export { Container };
