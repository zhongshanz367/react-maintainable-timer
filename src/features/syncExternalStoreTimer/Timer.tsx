import { SyncExternalStoreTimerControls } from "./TimerControls";
import SyncExternalStoreTimerDisplay from "./TimerDisplay";

export const SyncExternalStoreTimer = () => {
  return (
    <>
      <h2>Sync External Store</h2>
      <SyncExternalStoreTimerDisplay />
      <SyncExternalStoreTimerControls />
    </>
  );
};
