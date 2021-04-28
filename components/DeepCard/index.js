import * as S from "./style";
import Image from "next/image";
import { Button } from "@/components/index";
export default function DeepCard({ data }) {
  return (
    <S.DeepCardGroup>
      {data?.map((el, card, link) => {
        return (
          <S.DeepCard key={card}>
            <S.DeepImg>
              <Image src={el.img} width={163} height={167} />
            </S.DeepImg>
            <S.DeepTitle>{el.title}</S.DeepTitle>
            <Button
              onClick={() => `${window.open(el.link, "_blank")}`}
              type="small"
            >
              acesse
            </Button>
          </S.DeepCard>
        );
      })}
    </S.DeepCardGroup>
  );
}
