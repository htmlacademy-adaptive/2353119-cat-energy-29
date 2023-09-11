let mainHeader = document.querySelector('.main-header');

function nojs() {
  mainHeader.classList.remove('main-header--nojs');
}

document.addEventListener("DOMContentLoaded", nojs);


// https://learn.javascript.ru/onload-ondomcontentloaded
