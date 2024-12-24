import { useSyncExternalStoreTime } from "./useTimer";

export const SyncExternalStoreTimerDisplay = () => {
  const time = useSyncExternalStoreTime();
  return <div>{time}</div>;
};

export default SyncExternalStoreTimerDisplay;
