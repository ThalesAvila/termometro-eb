import * as S from "./style";

export default function EbCard({ data }) {
  return (
    <S.EbCardGroup>
      {data?.map((el, card) => {
        return (
          <S.EbCard key={card}>
            <S.EbImg>
              <img src={el.img}
                srcSet={`
                ${el.img} 0.5x,
                ${el.img} 0.75x,
                ${el.img} 1.5x,
              `} />
            </S.EbImg>
            <S.EbTitle>{el.title}</S.EbTitle>
          </S.EbCard>
        );
      })}
    </S.EbCardGroup>
  );
}
