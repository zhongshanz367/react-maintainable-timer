import { createContext, useContext } from "react";

type SimpleTimerContextType = {
  start: () => void;
  stop: () => void;
  reset: () => void;
  time: number;
};

export const SimpleTimerContext = createContext<SimpleTimerContextType>({
  start: () => {},
  stop: () => {},
  reset: () => {},
  time: 0,
});

export const useSimpleTimerContext = () => {
  const context = useContext(SimpleTimerContext);
  if (!context) {
    throw new Error();
  }

  return context;
};
