import { useSimpleTimerContext } from "./useTimerContext";

export const SimpleTimerDisplay = () => {
  const { time } = useSimpleTimerContext();
  return <div>{time}</div>;
};

export default SimpleTimerDisplay;
