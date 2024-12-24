import { useCallback, useState, useEffect } from "react";

export type TimerCallback = (elapsedSeconds: number) => void;

export const useSimpleTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const start = useCallback(() => setIsRunning(true), []);
  const stop = useCallback(() => setIsRunning(false), []);
  const reset = useCallback(() => setTime(0), []);

  return { start, stop, reset, time };
};
