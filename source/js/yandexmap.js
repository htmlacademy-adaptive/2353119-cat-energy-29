function initMap() {
  const map = new ymaps.Map("yandexmap", {
    center: [59.938631, 30.323037],
    zoom: 14,
    autoFitToViewport: 'always'
  });

  myPlacemark = new ymaps.Placemark([59.938631, 30.323037], {
    hintContent: 'Расположение HTML Academy'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map/pin.png',
    iconImageSize: [56, 52],
    iconImageOffset: [-24, -42]
  });

  map.geoObjects.add(myPlacemark);
  map.controls.remove("typeSelector");
  map.controls.remove("trafficControl");
  map.controls.remove("fullscreenControl");
}

ymaps.ready(initMap);
