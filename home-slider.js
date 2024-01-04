

let swiperCards = new Swiper('.card-content', {
    // Optional parameters
    loop: true,
    spaceBetween: 50,
    grabCursor: true,
    centerSlide: 'true',
    slidesPerView: "auto",
    fade: 'true',
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      midifier: 1,
      slideShadows: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,    
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
    },
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
  });