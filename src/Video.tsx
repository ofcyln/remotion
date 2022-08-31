import { Composition } from "remotion";
import FrontX from "./FrontX";

export const RemotionVideo = () => {
  return (
    <>
      <Composition
        id="FrontX"
        component={FrontX}
        // TODO
        durationInFrames={14 * 24}
        fps={24}
        width={3840}
        height={2160}
      />
    </>
  );
};
