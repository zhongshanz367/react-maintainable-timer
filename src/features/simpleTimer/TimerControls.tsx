import { useSimpleTimerContext } from "./useTimerContext";

export const SimpleTimerControls = () => {
  const { start, stop, reset } = useSimpleTimerContext();

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
