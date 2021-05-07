import {
  Title,
  Graph,
  Collapsable,
  Paragraph,
  Column,
  View,
} from "@/components/index";
export default function DataBox({
  collapsableData,
  title1,
  title2,
  paragraph,
  graphValue,
  color,
  pdf,
}) {
  return (
    <>
      {pdf ? (
        <>
          <Column big margin="6vw 0 0 0">
            <View reportBoxText width="27vw">
              <Title
                type="report-box-graph"
                color={color}
                title1={title1}
                title2={title2}
              />
            </View>
            <View margin="4vw auto" width="18vw">
              <Graph value={graphValue} color={color} />
            </View>
          </Column>
          <Column small>
            <Paragraph>{paragraph}</Paragraph>
          </Column>
          <Column full>
            {collapsableData.map((item, el) => {
              return (
                <View key={el}>
                  <Title
                    type="report-box-graph"
                    color={color}
                    title1={item.title}
                  />
                  <Paragraph>{item.text}</Paragraph>
                </View>
              );
            })}
          </Column>
        </>
      ) : (
        <>
          <Column big margin="0 0 0 0">
            <View reportBoxText width="27vw">
              <Title
                type="report-box-graph"
                color={color}
                title1={title1}
                title2={title2}
              />
            </View>
            <View margin="4vw auto" width="18vw">
              <Graph value={graphValue} color={color} />
            </View>
            <View padding="0vw 5vw 0vw 0vw">
              <Paragraph textAlign="start">{paragraph}</Paragraph>
            </View>
          </Column>
          <Column small>
            <Collapsable data={collapsableData}></Collapsable>
          </Column>
        </>
      )}
    </>
  );
}
