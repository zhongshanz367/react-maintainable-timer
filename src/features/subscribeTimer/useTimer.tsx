import { useRef, useCallback, useState, useEffect } from "react";

type TimerCallback = (elapsedSeconds: number) => void;

export const useSubscribeTimer = () => {
  const timer = useRef<number>(undefined);
  const elapsedSeconds = useRef(0);
  const subscribers = useRef<TimerCallback[]>([]);

  const notifySubscribers = useCallback(() => {
    subscribers.current?.forEach((callback) => {
      callback(elapsedSeconds.current);
    });
  }, []);

  const start = useCallback(() => {
    clearInterval(timer.current);

    timer.current = setInterval(() => {
      elapsedSeconds.current = elapsedSeconds.current + 1;
      notifySubscribers();
    }, 1000);
  }, [notifySubscribers]);

  const stop = useCallback(() => {
    clearInterval(timer.current);
    timer.current = undefined;
  }, []);

  const reset = useCallback(() => {
    const isRunning = !!timer.current;

    if (isRunning) {
      stop();
    }

    elapsedSeconds.current = 0;
    notifySubscribers();

    if (isRunning) {
      start();
    }
  }, [notifySubscribers, stop, start]);

  const useElapsedTime = () => {
    const [seconds, setSeconds] = useState(elapsedSeconds.current);

    useEffect(() => {
      subscribers.current?.push(setSeconds);

      return () => {
        subscribers.current = [];
      };
    }, []);

    return { seconds };
  };

  return { start, stop, reset, useElapsedTime };
};
