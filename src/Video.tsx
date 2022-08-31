import { Composition } from "remotion";
import FrontX from "./FrontX";

export const RemotionVideo = () => {
  return (
    <>
      <Composition
        id="FrontX"
        component={FrontX}
        durationInFrames={14 * 24 + 21}
        fps={24}
        width={3840}
        height={2160}
      />
    </>
  );
};
