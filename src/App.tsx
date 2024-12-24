import "./App.css";
import Container from "./components/Container";
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
          <Container>
            <SimpleTimer />
          </Container>
          <Container>
            <OutsideOfReactTimer />
          </Container>
          <Container>
            <SubscribeTimer />
          </Container>
          <Container>
            <SyncExternalStoreTimer />
          </Container>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <div className="container">
            <SimpleTimer />
          </div>
          <div className="container">
            <OutsideOfReactTimer />
          </div>
          <div className="container">
            <SubscribeTimer />
          </div>
          <div className="container">
            <SyncExternalStoreTimer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
