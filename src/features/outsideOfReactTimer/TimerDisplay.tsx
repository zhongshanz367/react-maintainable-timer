import { useOutsideOfReactTimerContext } from "./useTimerContext";

export const OutsideOfReactTimerDisplay = () => {
  const { ref } = useOutsideOfReactTimerContext();
  return <span ref={ref}>0</span>;
};

export default OutsideOfReactTimerDisplay;
