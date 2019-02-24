(function () {
  /* Popup
  ********************************************************************* */
  var popupLinks = document.querySelectorAll(".js-popup-open");

  var closePopup = function (popupElem) {
    document.body.classList.remove("page--popup");
    popupElem.classList.remove("popup--open");
    popupElem.classList.add("popup--close");
  };

  var onPopupClose = function (evt) {
    evt.preventDefault();

    var popupTarget = document.querySelector(".popup--open");
    closePopup(popupTarget);
  };

  var openPopup = function (popupElem) {
    var closeButton = popupElem.querySelector(".popup__close");

    document.body.classList.add("page--popup");
    popupElem.classList.remove("popup--close");
    popupElem.classList.add("popup--open");
    popupElem.querySelector("input").focus();

    closeButton.addEventListener("click", onPopupClose);
  };

  var onPopupLinkClick = function (popupLink) {
    popupLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      var popupTarget = document.querySelector(this.getAttribute("href"));
      openPopup(popupTarget);
    });
  };

  [].forEach.call(popupLinks, onPopupLinkClick);

  /* Map
  ********************************************************************* */
  var mapContainer = document.querySelector("#map");

  if (mapContainer) {
    ymaps.ready(function () {
      var map = new ymaps.Map("map", {
        center: [59.939, 30.3215],
        zoom: 17,
        scrollZoom: false,
        controls: []
      }, {
        searchControlProvider: "yandex#search"
      }),
      Placemark = new ymaps.Placemark([59.938652, 30.323201], {
        balloonContent: "Санкт-Петербург, Большая Конюшенная улица, 19/8"
      }, {
        iconLayout: "default#image",
        iconImageHref: "img/pin.png",
        iconImageSize: [231, 190],
        iconImageOffset: [-49, -190]
      });

      map.geoObjects.add(Placemark);
    });
  }
})();
