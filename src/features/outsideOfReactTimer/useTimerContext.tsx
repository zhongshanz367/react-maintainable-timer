import { createContext, RefObject, useContext } from "react";

export type OutsideOfReactTimerContextType = {
  start: () => void;
  stop: () => void;
  reset: () => void;
  ref?: RefObject<HTMLSpanElement>;
};

export const OutsideOfReactTimerContext = createContext<OutsideOfReactTimerContextType | undefined>({
  start: () => {},
  stop: () => {},
  reset: () => {},
  ref: undefined,
});

export const useOutsideOfReactTimerContext = () => {
  const context = useContext(OutsideOfReactTimerContext);
  if (!context) {
    throw new Error();
  }

  return context;
};
