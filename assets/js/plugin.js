// SLICK SLIDER
$('.slick-wrapper').each(function (idx, item) {
  var carouselId = "carousel" + idx;
  this.id = carouselId;
  $(this).find('.slick').slick({
    infinite: true,
    adaptiveHeight: true,
    touchThreshold: 10,
    swipeToSlide: true,
    slide: "#" + carouselId + " .slick .item",
    appendArrows: "#" + carouselId + " .slick-nav",
    appendDots: "#" + carouselId + " .slick-nav",
    prevArrow: '<div class="slick-prev-wrapper"><span class="slick-prev"><i class="fa fa-angle-left prev-arrow" aria-hidden="true"></i></span></div>',
    nextArrow: '<div class="slick-next-wrapper"><span class="slick-next"><i class="fa fa-angle-right next-arrow" aria-hidden="true"></i></span></div>',
    customPaging: function (slider, i) {
      return '';
    }
  });
});	