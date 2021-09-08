$(function(){

  // init matchHeight
  $('.hub-post').matchHeight(); 

});

$('.post_item_event').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  dots: true,
  nextArrow: '<a class="slick-custom-next"> <i class="fas fa-angle-right"></i> </a>',
  prevArrow: '<a class="slick-custom-prev"> <i class="fas fa-angle-left"></i> </a>',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
