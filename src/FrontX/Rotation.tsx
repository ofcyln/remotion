import { View } from "react-native";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Extrapolate } from "../components/Redash";
import Front from "./Icons/Front";
import X from "./Icons/X";

export interface UseRotationParams {
  isX?: boolean;
}

const Rotation = ({ isX = false }: UseRotationParams) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const rotate = interpolate(
    frame,
    [!isX ? 20 : 0, 2 * fps],
    [0, 1080],
    Extrapolate.CLAMP
  );
  // const translateY = interpolate(frame, [0, 10], [0, 350], Extrapolate.CLAMP);
  const scale = interpolate(
    frame,
    [10, 17],
    [1, !isX ? 2 : 1],
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
        {isX ? (
          <View style={{ transform: [{ scale }, { rotate: `${rotate}deg` }] }}>
            <X />
          </View>
        ) : (
          <View style={{ transform: [{ scale }, { rotate: `${rotate}deg` }] }}>
            <Front />
          </View>
        )}
      </View>
    </View>
  );
};

export default Rotation;
