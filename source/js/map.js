ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search',
      FitToViewport: 'always'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/icon-map-pin.svg',
      // Размеры метки.
      iconImageSize: [66, 101],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-33, -101]
    });

  myMap.geoObjects
    .add(myPlacemark)
});
