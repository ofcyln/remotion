import { View } from "react-native";
import { interpolate, useCurrentFrame } from "remotion";
import { Extrapolate } from "../components/Redash";
import X from "./Icons/X";

const RotationX = () => {
  const frame = useCurrentFrame();
  const rotate = interpolate(frame, [0, 42], [0, 1080], Extrapolate.CLAMP);
  // const translateY = interpolate(frame, [0, 10], [0, 350], Extrapolate.CLAMP);
  const scale = interpolate(frame, [10, 17], [1, 1], Extrapolate.CLAMP);

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
        <View style={{ transform: [{ scale }, { rotate: `${rotate}deg` }] }}>
          <X />
        </View>
      </View>
    </View>
  );
};

export default RotationX;
