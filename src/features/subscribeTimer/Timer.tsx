import { SubscribeTimerProvider } from "./TimerProvider";
import { SubscribeTimerControls } from "./TimerControls";
import SubscribeTimerDisplay from "./TimerDisplay";
import Container from "../../components/Container";

export const SubscribeTimer = () => {
  return (
    <Container>
      <SubscribeTimerProvider>
        <h2>Subscribe</h2>
        <SubscribeTimerDisplay />
        <SubscribeTimerControls />
      </SubscribeTimerProvider>
    </Container>
  );
};
