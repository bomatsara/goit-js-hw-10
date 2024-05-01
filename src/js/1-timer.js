import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import { iziToastOptions } from './timer/options.js';
import { enableEl, disableEl, dateChecker } from './timer/utilities.js';
import { timerAction } from './timer/actions.js';
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/flatpickr.css';

document.addEventListener('DOMContentLoaded', event => {
  let userSelectedDate = null;
  let currentDate = null;
  let datetimePickerEl = null;
  const btnEl = document.querySelector('#datetime-picker-button');
  const timerEl = document.querySelector('.timer');

  disableEl(btnEl);

  flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      currentDate = Date.now();

      if (!dateChecker(selectedDates, currentDate)) {
        iziToast.error(iziToastOptions.error);
      }

      userSelectedDate = selectedDates;
      datetimePickerEl = this.element;
      enableEl(btnEl);
    },
  });

  btnEl.addEventListener('click', event => {
    if (!userSelectedDate) return;

    timerAction(userSelectedDate[0], timerEl);
    disableEl(btnEl);
    disableEl(datetimePickerEl);
  });
});