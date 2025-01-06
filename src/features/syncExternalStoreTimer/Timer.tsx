import Container from "../../components/Container";
import { SyncExternalStoreTimerControls } from "./TimerControls";
import SyncExternalStoreTimerDisplay from "./TimerDisplay";

export const SyncExternalStoreTimer = () => {
  return (
    <Container>
      <h2>Sync External Store</h2>
      <SyncExternalStoreTimerDisplay />
      <SyncExternalStoreTimerControls />
    </Container>
  );
};
