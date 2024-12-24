import { useSyncExternalStore } from "react";
import Timer, { TimerEvent } from "../../utils/Timer";

declare global {
  interface Window {
    timer: Timer;
  }
}

const timer = new Timer();

export const useSyncExternalStoreTime = () => {
  const time = useSyncExternalStore(subscribe, getShapshot);
  return time;
};

function subscribe(callback: () => void) {
  window.addEventListener(TimerEvent.TimeUpdated, callback);

  return () => window.removeEventListener(TimerEvent.TimeUpdated, callback);
}

function getShapshot() {
  return timer.elapsedTime;
}
