import { RefObject, useEffect, useRef } from "react";
import Timer from "../../utils/Timer";

export const useOutsideOfReactTimer = (ref: RefObject<HTMLSpanElement>) => {
  const timer = useRef<Timer | null>(null);

  useEffect(() => {
    if (ref.current !== null) {
      timer.current = new Timer(ref.current);
    }

    return () => timer.current?.stop();
  }, [ref]);

  const start = () => timer?.current?.start();
  const stop = () => timer?.current?.stop();
  const reset = () => timer?.current?.reset();

  return { start, stop, reset };
};
