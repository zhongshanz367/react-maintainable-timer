import { useSubscribeTimerContext } from "./useTimerContext";

export const SubscribeTimerControls = () => {
  const { start, stop, reset } = useSubscribeTimerContext();

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
