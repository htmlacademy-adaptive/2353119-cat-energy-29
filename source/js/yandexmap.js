let map;

function initMap() {

  map = new ymaps.Map("yandexmap", {
    center: [59.938631, 30.323037],
    zoom: 14
  });

  myPlacemark = new ymaps.Placemark([59.938631, 30.323037], {
    hintContent: 'Расположение HTML Academy'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../img/map/pin.png',
    // Размеры метки.
    iconImageSize: [56, 52],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  });
  map.geoObjects.add(myPlacemark);
}
ymaps.ready(initMap);


// scroll

// let scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight
// );

// console.log('Полная высота документа с прокручиваемой частью: ' + scrollHeight);
