let map;

function initMap() {

  map = new ymaps.Map("yandexmap", {
    center: [59.938631, 30.323037],
    zoom: 14,
    autofitToViewport: 'always'
  });

  myPlacemark = new ymaps.Placemark([59.938631, 30.323037], {
    hintContent: 'Расположение HTML Academy'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map/pin.png',
    iconImageSize: [56, 52],
    iconImageOffset: [-5, -38]
  });
  map.geoObjects.add(myPlacemark);
}

ymaps.ready(initMap);
