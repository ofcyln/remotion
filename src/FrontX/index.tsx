import { View } from "react-native";
import { Audio, Sequence, useVideoConfig } from "remotion";
import audio from "./assets/mp3/acdc.mp3";
import FrontX from "./FrontX";
import RotationX from "./RotationX";
import ScaleFront from "./ScaleFront";

const Comp = () => {
  const { fps } = useVideoConfig();
  const cuts = [2 * fps, 37, fps, fps, 2 * fps] as const;
  const from = (index: number) => cuts.slice(0, index).reduce((a, v) => a + v);
  return (
    <View style={{ flex: 1 }}>
      <Sequence
        from={0}
        durationInFrames={cuts.reduce((acc, curr) => acc + curr, 0)}
        name="Audio"
      >
        <Audio src={audio} />
      </Sequence>
      <Sequence from={0} durationInFrames={cuts[0]} name="Title Dark">
        <FrontX darkMode={true} still={true} isX={true} />
      </Sequence>
      <Sequence from={from(1)} durationInFrames={cuts[1]} name="RotationX">
        <RotationX />
      </Sequence>
      <Sequence from={from(2)} durationInFrames={cuts[2]} name="Zoom In">
        <ScaleFront fromScale={0} toScale={2} fromTime={5} toTime={15} />
      </Sequence>
      <Sequence from={from(3)} durationInFrames={cuts[3]} name="Zoom Out">
        <ScaleFront fromScale={2} toScale={0} fromTime={0} toTime={15} />
      </Sequence>
      <Sequence from={from(4)} durationInFrames={cuts[4]} name="FrontX">
        <FrontX isX={false} darkMode={true} still={true} />
      </Sequence>
    </View>
  );
};

export default Comp;
