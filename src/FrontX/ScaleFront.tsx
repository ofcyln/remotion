import { View } from "react-native";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Extrapolate } from "../components/Redash";
import Front from "./Icons/Front";

export interface UseScaleParams {
  fromTime: number;
  toTime: number;
  fromScale: number;
  toScale: number;
}

const ScaleFront = ({ fromTime, toTime, fromScale, toScale }: UseScaleParams) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = interpolate(
    frame,
    [fromTime, toTime],
    [fromScale, toScale],
    Extrapolate.CLAMP
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ transform: [{ scale }] }}>
          <Front />
        </View>
      </View>
    </View>
  );
};

export default ScaleFront;
