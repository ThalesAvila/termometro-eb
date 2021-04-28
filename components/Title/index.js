import * as S from "./style";
export default function Title({
  rotated,
  title1,
  title2,
  title3,
  bold,
  color,
  hero,
  type,
}) {
  return (
    <>
      {rotated && <S.RotatedTitle>{rotated}</S.RotatedTitle>}
      <S.Title bold={bold} color={color} hero={hero} type={type}>
        {title1}
        <strong>{title2}</strong>
        {title3}
      </S.Title>
    </>
  );
}
