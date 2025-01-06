import "./App.css";
import { OutsideOfReactTimer } from "./features/outsideOfReactTimer/Timer";
import { SimpleTimer } from "./features/simpleTimer/Timer";
import { SubscribeTimer } from "./features/subscribeTimer/Timer";
import { SyncExternalStoreTimer } from "./features/syncExternalStoreTimer/Timer";

function App() {
  return (
    <div>
      <h1>Timer</h1>
      <p>Please turn on “Highlight updates when components render” in React DevTools.</p>
      <div style={{ display: "flex" }}>
        <div>
          <SimpleTimer />
          <OutsideOfReactTimer />
          <SubscribeTimer />
          <SyncExternalStoreTimer />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <SimpleTimer />
          <OutsideOfReactTimer />
          <SubscribeTimer />
          <SyncExternalStoreTimer />
        </div>
      </div>
    </div>
  );
}

export default App;
