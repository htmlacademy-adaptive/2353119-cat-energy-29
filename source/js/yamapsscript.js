document.addEventListener('DOMContentLoaded', function () {
  const createScript = function (link) {
    const body = document.body;
    const element = document.createElement('script');
    element.setAttribute('src', link);
    body.appendChild(element);
    return element;
  }

  const onScroll = function () {
    const scrollTop = window.scrollY;
    const mapImage = document.querySelector('.contacts__container-image-map');

    if (scrollTop > 100) {
      const script = createScript('https://api-maps.yandex.ru/2.1/?apikey=31646f34-5cbb-4f95-bfd8-49550feff3a8&lang=ru_RU');
      script.addEventListener('load', function () {
        createScript('js/yandexmap.js');

      });
      document.removeEventListener('scroll', onScroll);
      mapImage.classList.add('contacts__container-image-map--nojs');
    }
  }

  document.addEventListener('scroll', onScroll);
});


