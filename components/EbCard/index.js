import * as S from "./style";
import Image from "next/image";

export default function EbCard({ data }) {
  return (
    <S.EbCardGroup>
      {data?.map((el, card) => {
        return (
          <S.EbCard key={card}>
            <S.EbImg>
              <Image src={el.img} width={110} height={110} />
            </S.EbImg>
            <S.EbTitle>{el.title}</S.EbTitle>
          </S.EbCard>
        );
      })}
    </S.EbCardGroup>
  );
}
