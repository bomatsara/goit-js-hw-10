import iziToast from 'izitoast';
import { iziToastOptions } from './snackbar/options.js';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/flatpickr.css';

document.addEventListener('DOMContentLoaded', event => {
  const formEl = document.querySelector('.form');

  if (!formEl) return;

  formEl.addEventListener('submit', event => {
    event.preventDefault();
    const delay = formEl.elements.delay.value;
    const state = formEl.elements.state.value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(`Fulfilled promise in ${delay}ms`);
        } else {
          reject(`Rejected promise in ${delay}ms`);
        }
      }, delay);
    });

    promise
      .then(value => {
        iziToastOptions.fulfilled.message = value;
        iziToast.success(iziToastOptions.fulfilled);
      })
      .catch(error => {
        iziToastOptions.rejected.message = error;
        iziToast.error(iziToastOptions.rejected);
      });

    formEl.reset();
  });
});