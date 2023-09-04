let navSite = document.querySelector('.site-navigation');
let navToggle = document.querySelector('.nav-toggle');
let mainHeader = document.querySelector('.main-header');

mainHeader.classList.remove('main-header--nojs');

navToggle.addEventListener('click', function () {
  if (navSite.classList.contains('site-navigation--closed')) {
    navSite.classList.remove('site-navigation--closed');
    navSite.classList.add('site-navigation--opened');
    navToggle.classList.add('nav-toggle--active');
  } else {
    navSite.classList.add('site-navigation--closed');
    navSite.classList.remove('site-navigation--opened');
    navToggle.classList.remove('nav-toggle--active');
  }
});
