import { createContext, useContext } from "react";

type SubscribeTimerContextType = {
  start: () => void;
  stop: () => void;
  reset: () => void;
  useElapsedTime: () => { seconds: number };
};

export const SubscribeTimerContext = createContext<SubscribeTimerContextType>({
  start: () => {},
  stop: () => {},
  reset: () => {},
  useElapsedTime: () => ({ seconds: 0 }),
});

export const useSubscribeTimerContext = () => {
  const context = useContext(SubscribeTimerContext);
  if (!context) {
    throw new Error();
  }

  return context;
};
