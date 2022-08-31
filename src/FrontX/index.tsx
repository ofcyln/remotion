import { View } from "react-native";
import { Sequence, useVideoConfig } from "remotion";
import FrontX from "./FrontX";
import Rotation from "./Rotation";
import ScaleFront from "./ScaleFront";

const Comp = () => {
  const { fps } = useVideoConfig();
  const cuts = [2 * fps, 2 * fps, fps, fps, 2 * fps] as const;
  const from = (index: number) => cuts.slice(0, index).reduce((a, v) => a + v);
  return (
    <View style={{ flex: 1 }}>
      <Sequence from={0} durationInFrames={cuts[0]} name="Title Dark">
        <FrontX darkMode={true} still={true} isX />
      </Sequence>
      {/* <Sequence from={from(1)} durationInFrames={cuts[1]} name="Title Light">
        <FrontX darkMode={false} still={false} />
      </Sequence>
      <Sequence from={from(2)} durationInFrames={cuts[2]} name="Dots">
        <Dots />
      </Sequence>
      <Sequence from={from(3)} durationInFrames={cuts[3]} name="Big Dots">
        <Dots2 />
      </Sequence>
      <Sequence from={from(4)} durationInFrames={cuts[4]} name="Signs Light">
        <SignsLight />
      </Sequence>
      <Sequence from={from(5)} durationInFrames={cuts[5]} name="Signs Dark">
        <SignsDark />
      </Sequence> */}
      {/* <Sequence from={from(6)} durationInFrames={cuts[6]} name="Logo Light">
        <LogoLight />
      </Sequence>
      <Sequence from={from(7)} durationInFrames={cuts[7]} name="Logo Light">
        <Icons />
      </Sequence>
      <Sequence from={from(8)} durationInFrames={cuts[8]} name="Logo Light">
        <Roulette />
      </Sequence> */}
      <Sequence from={from(1)} durationInFrames={cuts[1]} name="Rotation">
        <Rotation isX={true} />
      </Sequence>
      <Sequence from={from(2)} durationInFrames={cuts[2]} name="Zoom In">
        <ScaleFront fromScale={0} toScale={2} fromTime={5} toTime={15} />
      </Sequence>
      <Sequence from={from(3)} durationInFrames={cuts[3]} name="Zoom Out">
        <ScaleFront fromScale={2} toScale={0} fromTime={0} toTime={15} />
      </Sequence>
      <Sequence from={from(4)} durationInFrames={cuts[4]} name="FrontX">
        <FrontX darkMode={true}still={true} />
      </Sequence>
      {/* <Sequence from={from(10)} durationInFrames={cuts[10]} name="Rotation">
        <MainTitle />
      </Sequence> */}
    </View>
  );
};

export default Comp;
