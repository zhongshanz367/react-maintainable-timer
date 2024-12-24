export const TimerEvent = {
  TimeStart: "TimeStart",
  TimeStop: "TimeStop",
  TimeReset: "TimeReset",
  TimeUpdated: "TimeUpdated",
};

class Timer {
  elapsedTime: number = 0;
  private element?: HTMLElement;
  private intervalId: number | null = null;
  private limitSeconds?: number;
  private onTimeUp?: () => void;

  constructor(
    element?: HTMLElement,
    options?: {
      offsetSeconds?: number;
      limitSeconds?: number;
      onTimeUp?: () => void;
    }
  ) {
    this.element = element;
    this.elapsedTime = options?.offsetSeconds || 0;
    this.limitSeconds = options?.limitSeconds;
    this.onTimeUp = options?.onTimeUp;

    this.addEventListners();
  }

  addEventListners() {
    window.addEventListener(TimerEvent.TimeStart, () => this.start());
    window.addEventListener(TimerEvent.TimeStop, () => this.stop());
    window.addEventListener(TimerEvent.TimeReset, () => this.reset());
  }

  isRunning() {
    return this.intervalId !== null;
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.updateTime(this.elapsedTime + 1);

      if (this.limitSeconds && this.elapsedTime >= this.limitSeconds) {
        this.onTimeUp?.();
        this.stop();
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.updateTime(0);
  }

  updateTime(time: number) {
    this.elapsedTime = time;

    if (this.element) {
      this.element.textContent = String(this.elapsedTime);
    }

    window.dispatchEvent(new CustomEvent(TimerEvent.TimeUpdated, { detail: this.elapsedTime }));
  }
}

export default Timer;
