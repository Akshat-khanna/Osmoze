$(function() {
  $('.img-gal').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
  });
  if ($('.blogCarousel').length) {
    $('.blogCarousel').owlCarousel({
        loop: false,
        margin: 30,
        items: 1,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        navText : ["<div class='left-arrow'><img src='./images/left.png'></div>","<div class='right-arrow'><img src='./images/right.png'></div>"],
        responsive:{
          0:{
              items:1
          },
          1000:{
              items:2
          }
      }
    })
  }
  
});


