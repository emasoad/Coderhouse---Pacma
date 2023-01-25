var elem = document.querySelector(".carousel-container");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "right",
  contain: true,
  initialIndex: 2,
  pageDots: false,
  wrapAround: true,
  autoPlay: 5000,
  draggable: true,
  prevNextButtons: false,
  pauseAutoPlayOnHover: false
});
