import { ReactNode, useRef } from "react";
import { OutsideOfReactTimerContext } from "./useTimerContext";
import { useOutsideOfReactTimer } from "./useTimer";

export const OutsideOfReactTimerProvider = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const timer = useOutsideOfReactTimer(ref);

  return <OutsideOfReactTimerContext.Provider value={{ ref, ...timer }}>{children}</OutsideOfReactTimerContext.Provider>;
};
