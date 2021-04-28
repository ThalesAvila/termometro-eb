import * as S from "./style";

export default function Timeline({ activeTab, totalSteps = [0, 1, 2, 3, 4] }) {
  return (
    <S.StepsBox>
      {totalSteps.map((el) => {
        return (
          <S.Circle active={el === activeTab} key={Math.random()}>
            {el + 1}
          </S.Circle>
        );
      })}
    </S.StepsBox>
  );
}
