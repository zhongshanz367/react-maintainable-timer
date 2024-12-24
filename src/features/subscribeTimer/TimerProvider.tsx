import { ReactNode } from "react";
import { useSubscribeTimer } from "./useTimer";
import { SubscribeTimerContext } from "./useTimerContext";

export const SubscribeTimerProvider = ({ children }: { children: ReactNode }) => {
  const timer = useSubscribeTimer();

  return <SubscribeTimerContext.Provider value={timer}>{children}</SubscribeTimerContext.Provider>;
};
