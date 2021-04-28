import * as S from "./style";
import { View } from "@/components/index";

export default function Collapsable({ data }) {
  return (
    <View>
      <S.Collapses accordion>
        {data?.map((el, panel) => {
          return (
            <S.Panels
              showArrow={false}
              key={panel}
              header={
                <>
                  {el.isPositive && <S.Check />}
                  <View className="square" />
                  {el.title.toUpperCase()}
                </>
              }
            >
              {el.text}
            </S.Panels>
          );
        })}
      </S.Collapses>
    </View>
  );
}
