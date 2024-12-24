import { SubscribeTimerProvider } from "./TimerProvider";
import { SubscribeTimerControls } from "./TimerControls";
import SubscribeTimerDisplay from "./TimerDisplay";

export const SubscribeTimer = () => {
  return (
    <SubscribeTimerProvider>
      <h2>Subscribe</h2>
      <SubscribeTimerDisplay />
      <SubscribeTimerControls />
    </SubscribeTimerProvider>
  );
};
