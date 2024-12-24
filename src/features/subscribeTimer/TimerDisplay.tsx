import { useSubscribeTimerContext } from "./useTimerContext";

export const SubscribeTimerDisplay = () => {
  const { useElapsedTime } = useSubscribeTimerContext();
  return <div>{useElapsedTime().seconds}</div>;
};

export default SubscribeTimerDisplay;
