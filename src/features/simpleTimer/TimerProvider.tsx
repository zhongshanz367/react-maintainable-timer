import { ReactNode } from "react";
import { useSimpleTimer } from "./useTimer";
import { SimpleTimerContext } from "./useTimerContext";

export const SimpleTimerProvider = ({ children }: { children: ReactNode }) => {
  const timer = useSimpleTimer();

  return <SimpleTimerContext.Provider value={timer}>{children}</SimpleTimerContext.Provider>;
};
