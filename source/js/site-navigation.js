let navSite = document.querySelector('.site-navigation');
let navToggle = document.querySelector('.nav-toggle');

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
