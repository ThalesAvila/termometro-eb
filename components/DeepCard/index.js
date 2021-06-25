import * as S from "./style";
import { Button } from "@/components/index";
export default function DeepCard({ data }) {
  return (
    <S.DeepCardGroup>
      {data?.map((el, card, link) => {
        return (
          <S.DeepCard key={card}>
            <S.DeepImg>
              <img
                src={el.img}
                srcSet={`
                  ${el.img} 0.5x,
                  ${el.img} 0.75x,
                  ${el.img} 1.5x,
                `}
              />
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
