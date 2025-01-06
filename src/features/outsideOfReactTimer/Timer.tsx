import { OutsideOfReactTimerProvider } from "./TimerProvider";
import { OutsideOfReactTimerControls } from "./TimerControls";
import OutsideOfReactTimerDisplay from "./TimerDisplay";
import Container from "../../components/Container";

export const OutsideOfReactTimer = () => {
  return (
    <Container>
      <OutsideOfReactTimerProvider>
        <h2>Outside Of React</h2>
        <OutsideOfReactTimerDisplay />
        <OutsideOfReactTimerControls />
      </OutsideOfReactTimerProvider>
    </Container>
  );
};
