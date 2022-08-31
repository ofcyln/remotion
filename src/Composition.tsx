import { useCurrentFrame, useVideoConfig } from "remotion";

export const MyComposition = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        fontSize: "7em",
      }}
    >
      This {width}px x {height}px video is {durationInFrames / fps} seconds
      long. The current frame is {frame}.
    </div>
  );
};
