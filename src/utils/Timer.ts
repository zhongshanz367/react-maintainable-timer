export const TimerEvent = {
  TimeStart: "TimeStart",
  TimeStop: "TimeStop",
  TimeReset: "TimeReset",
  TimeUp: "TimeUp",
  TimeUpdated: "TimeUpdated",
};

class Timer {
  private _elapsedTime: number = 0;
  private _element?: HTMLElement;
  private _intervalId: number | null = null;
  private _limitSeconds?: number;
  private _onTimeUp?: () => void;

  constructor(
    element?: HTMLElement,
    options?: {
      offsetSeconds?: number;
      limitSeconds?: number;
      onTimeUp?: () => void;
    }
  ) {
    this._element = element;
    this._elapsedTime = options?.offsetSeconds || 0;
    this._limitSeconds = options?.limitSeconds;
    this._onTimeUp = options?.onTimeUp;

    this.addEventListners();
  }

  get elapsedTime() {
    return this._elapsedTime;
  }

  addEventListners() {
    window.addEventListener(TimerEvent.TimeStart, () => this.start());
    window.addEventListener(TimerEvent.TimeStop, () => this.stop());
    window.addEventListener(TimerEvent.TimeReset, () => this.reset());
  }

  isRunning() {
    return this._intervalId !== null;
  }

  start() {
    if (this._intervalId !== null) {
      return;
    }

    this._intervalId = setInterval(() => {
      this.updateTime(this._elapsedTime + 1);

      if (this._limitSeconds && this._elapsedTime >= this._limitSeconds) {
        this.stop();

        window.dispatchEvent(new CustomEvent(TimerEvent.TimeUp));

        this._onTimeUp?.();
      }
    }, 1000);
  }

  stop() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }

  reset() {
    this.updateTime(0);
  }

  updateTime(time: number) {
    this._elapsedTime = time;

    if (this._element) {
      this._element.textContent = String(this._elapsedTime);
    }

    window.dispatchEvent(new CustomEvent(TimerEvent.TimeUpdated, { detail: this._elapsedTime }));
  }
}

export default Timer;
