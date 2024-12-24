import { TimerEvent } from "../../utils/Timer";

export const SyncExternalStoreTimerControls = () => {
  const start = () => window.dispatchEvent(new CustomEvent(TimerEvent.TimeStart));
  const stop = () => window.dispatchEvent(new CustomEvent(TimerEvent.TimeStop));
  const reset = () => window.dispatchEvent(new CustomEvent(TimerEvent.TimeReset));

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
