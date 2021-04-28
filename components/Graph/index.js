import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import * as S from "./style";
import { View, Title } from "@/components/index";

export default function Graph({ value, title, color = "#483699" }) {
  return (
    <View flex style={{ flexDirection: "column" }}>
      <S.BoxGraph>
        <CircularProgressbar
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "25px",
            pathTransitionDuration: 0.5,
            pathColor: color,
            textColor: "#483699",
            trailColor: "transparent",
            backgroundColor: "#3e98c7",
          })}
          value={value}
          strokeWidth={18}
          text={`${value}%`}
        />
      </S.BoxGraph>
      {title && (
        <View margin="3vw 0 0 0" width="13vw">
          <S.GraphTitle color={color}>{title.toUpperCase()}</S.GraphTitle>
        </View>
      )}
    </View>
  );
}
