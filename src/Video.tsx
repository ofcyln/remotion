import { Composition } from "remotion";
import FrontX from "./FrontX";

export const RemotionVideo = () => {
  return (
    <>
      <Composition
        id="FrontX"
        component={FrontX}
        durationInFrames={179}
        fps={24}
        width={3840}
        height={2160}
      />
    </>
  );
};
