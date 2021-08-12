
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay:
    {
      delay:2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640:{
        slidesPerView:1,
      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
    }
  });