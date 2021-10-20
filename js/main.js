'use strict';
var page = document.querySelector('.page');
var navigationMenu = document.querySelector('.main-navigation');
var navToggle = navigationMenu.querySelector('.main-navigation__toggle');
var telInput = document.querySelector('#tel-input');
var inputErrorColor = '#ff0001';
var inputErrorMessage = 'Номер телефона должен содержать цифры';

// Меню-бургер
navigationMenu.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navigationMenu.classList.contains('main-navigation--closed')) {
    navigationMenu.classList.remove('main-navigation--closed');
    navigationMenu.classList.add('main-navigation--opened');
    page.classList.add('blocked');
  } else {
    navigationMenu.classList.add('main-navigation--closed');
    navigationMenu.classList.remove('main-navigation--opened');
    page.classList.remove('blocked');
  }
});

// Функция визульного отображения ошибки валидации
var setError = function (input) {
  input.style.borderColor = inputErrorColor;
};

var removeError = function (input) {
  input.setCustomValidity('');
  input.style.borderColor = '';
};

// Валидация формы
var onTelInput = function () {
  var inputValue = telInput.value;
  var re = /[0-9]/;
  if (re.test(inputValue) === false) {
    telInput.setCustomValidity(inputErrorMessage);
    setError(telInput);
  } else {
    removeError(telInput);
  }
  if (telInput.value === '') {
    removeError(telInput);
  }
  telInput.reportValidity();
};

telInput.addEventListener('input', onTelInput);
