import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import * as S from "./style";
import { View } from "@/components/index";

export default function Graph({ value, title, color = "#483699" }) {
  const setColor = (color) => {
    switch (color) {
      case "survival":
        return "#F55D3E";
      case "optimization":
        return "#F0A202";
      case "purple":
        return "#483699";
      case "prosperity":
        return "#419D78";
      case "white":
        return "#fff";
      default:
        return "#000";
    }
  };
  return (
    <View flex style={{ flexDirection: "column", alignItems: "center" }}>
      <S.BoxGraph>
        <CircularProgressbar
          styles={buildStyles({
            strokeLinecap: "butt",
            textSize: "25px",
            pathTransitionDuration: 0.5,
            pathColor: setColor(color),
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
          <S.GraphTitle color={() => setColor(color)}>
            {title.toUpperCase()}
          </S.GraphTitle>
        </View>
      )}
    </View>
  );
}
