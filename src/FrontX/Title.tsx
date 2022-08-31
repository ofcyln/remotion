/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */

import { useCurrentFrame } from "remotion";
import X from "./Icons/X";

interface TitleProps {
  darkMode: boolean;
  still: boolean;
}

const Title = ({ darkMode, still }: TitleProps) => {
  const currentFrame = useCurrentFrame();
  const frame = still ? 0 : currentFrame;
  const everythingIsGone = frame >= 17;
  const fill = everythingIsGone ? "transparent" : darkMode ? "white" : "black";
  const nIsGone = frame >= 5;
  const oIsGone = frame >= 7;
  const eIsGone = frame >= 9;
  const tIsGone = frame >= 10;
  const reversedEisGone = frame >= 12;
  const isAreGone = frame >= 13;
  const xAndLAreGone = frame >= 14;
  const rAndLAreGone = frame >= 15;
  const showSquares = frame >= 16;
  const aIsGone = frame >= 17;
  const lIsGone = frame >= 18;
  const rectangleIsVisible = frame >= 20 && frame < 23;
  const XIsVisible = frame >= 22 && frame < 24;
  return <X />;
};

export default Title;
