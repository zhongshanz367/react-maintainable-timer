import { OutsideOfReactTimerProvider } from "./TimerProvider";
import { OutsideOfReactTimerControls } from "./TimerControls";
import OutsideOfReactTimerDisplay from "./TimerDisplay";

export const OutsideOfReactTimer = () => {
  return (
    <OutsideOfReactTimerProvider>
      <h2>Outside Of React</h2>
      <OutsideOfReactTimerDisplay />
      <OutsideOfReactTimerControls />
    </OutsideOfReactTimerProvider>
  );
};
