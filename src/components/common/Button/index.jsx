import * as S from "./index.styled";

export default function Button({ color, size, disabled, onClick, children }) {
  return (
    <S.Button disabled={disabled} color={color} size={size} onClick={onClick}>
      {children}
    </S.Button>
  );
}
