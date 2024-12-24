import { SimpleTimerProvider } from "./TimerProvider";
import { SimpleTimerControls } from "./TimerControls";
import SimpleTimerDisplay from "./TimerDisplay";

export const SimpleTimer = () => {
  return (
    <SimpleTimerProvider>
      <h2>Simple</h2>
      <SimpleTimerDisplay />
      <SimpleTimerControls />
    </SimpleTimerProvider>
  );
};
