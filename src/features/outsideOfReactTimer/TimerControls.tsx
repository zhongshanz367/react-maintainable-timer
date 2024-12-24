import { useOutsideOfReactTimerContext } from "./useTimerContext";

export const OutsideOfReactTimerControls = () => {
  const { start, stop, reset } = useOutsideOfReactTimerContext();

  return (
    <div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
