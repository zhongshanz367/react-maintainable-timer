import { SimpleTimerProvider } from "./TimerProvider";
import { SimpleTimerControls } from "./TimerControls";
import SimpleTimerDisplay from "./TimerDisplay";
import Container from "../../components/Container";

export const SimpleTimer = () => {
  return (
    <Container>
      <SimpleTimerProvider>
        <h2>Simple</h2>
        <SimpleTimerDisplay />
        <SimpleTimerControls />
      </SimpleTimerProvider>
    </Container>
  );
};
