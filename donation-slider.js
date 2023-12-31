let swiperCards = new Swiper('.card-content', {
    // Optional parameters
    loop: true,
    spaceBetween: 0,
    grabCursor: true,
    centerSlide: 'true',
    slidesPerView: "auto",
    fade: 'true',
    // autoplay: true,
  
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
        slidesPerView: 1.5,
    },
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
  });