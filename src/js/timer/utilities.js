export function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day).toString().padStart(2, '0');
  const hours = Math.floor((ms % day) / hour).toString().padStart(2, '0');
  const minutes = Math.floor(((ms % day) % hour) / minute).toString().padStart(2, '0');
  const seconds = Math.floor((((ms % day) % hour) % minute) / second).toString().padStart(2, '0');

  return { days, hours, minutes, seconds };
}

export function enableEl(element) {
  element.disabled = false;
}

export function disableEl(element) {
  element.disabled = true;
}

export function dateChecker(selectedDates, currentDate) {
  const selectedDate = selectedDates[0];
  const inequalityDates = selectedDate - currentDate;

  return inequalityDates > 0;
}