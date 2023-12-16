import * as S from "./index.styled";

export default function Button({ color, size, disabled, children }) {
  return (
    <S.Button disabled={disabled} color={color} size={size}>
      {children}
    </S.Button>
  );
}
