import { convertMs } from './utilities.js';

export function timerAction(selectedDate, timerEl) {
  const daysEl = timerEl.querySelector('[data-days]');
  const hoursEl = timerEl.querySelector('[data-hours]');
  const minutesEl = timerEl.querySelector('[data-minutes]');
  const secondsEl = timerEl.querySelector('[data-seconds]');

  const interval = window.setInterval(() => {
    const date = Date.now();
    const inequalityDates = selectedDate - date;

    if (inequalityDates < 0) {
      clearInterval(interval);
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(inequalityDates);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }, 1000);
}