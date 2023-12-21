import * as S from "./index.styled";

const PostButton = ({ onClick }) => {
  return (
    <S.Container onClick={onClick}>
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.985 12.528C21.0921 10.7058 20.6426 8.89413 19.6962 7.33333C18.7497 5.77254 17.3511 4.53642 15.6858 3.78899C14.0205 3.04156 12.1673 2.81816 10.3721 3.14843C8.57687 3.4787 6.92452 4.34702 5.63427 5.63818C4.34403 6.92934 3.47688 8.58231 3.14789 10.3777C2.81889 12.1732 3.04361 14.0262 3.79222 15.691C4.54083 17.3557 5.77794 18.7535 7.33941 19.6989C8.90087 20.6442 10.7129 21.0924 12.535 20.984M16 19H22M19 16V22M8.99999 10H9.00999M15 10H15.01"
          stroke="#D9D9D9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 15C10.158 15.64 11.06 16 12 16C12.94 16 13.842 15.64 14.5 15"
          stroke="#D9D9D9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </S.Container>
  );
};

export default PostButton;
