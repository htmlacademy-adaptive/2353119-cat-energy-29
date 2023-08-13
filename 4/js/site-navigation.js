let navList = document.querySelector('.site-navigation__list');
let navToggle = document.querySelector('.site-navigation__toggle');
let navItems = document.querySelectorAll('.site-navigation__item');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('site-navigation__list--closed')) {
    navList.classList.remove('site-navigation__list--closed');
    navList.classList.add('site-navigation__list--opened');
    navToggle.classList.add('site-navigation__toggle--active');
    for (let i = 0; i < navItems.length; i += 1) {
      let navItem = navItems[i];
      navItem.classList.add('site-navigation__item--active');
    }
  } else {
    navList.classList.add('site-navigation__list--closed');
    navList.classList.remove('site-navigation__list--opened');
    navToggle.classList.remove('site-navigation__toggle--active');
    for (let i = 0; i < navItems.length; i += 1) {
      let navItem = navItems[i];
      navItem.classList.remove('site-navigation__item--active');
    }
  }
});
