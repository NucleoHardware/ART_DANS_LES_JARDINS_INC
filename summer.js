//carrousel
var swiper = new Swiper(".swiper-carrusel .mySwiper", {
    slidesPerView: 1,
    spaceBetween: 80,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 5000, // Cambia el valor para ajustar el tiempo entre slides
      disableOnInteraction: false,
    },
    breakpoints: {
      991: {
        slidesPerView: 3,

        
      },
    },
  });
  var swiper = new Swiper(".carousel .mySwiper", {
    slidesPerView: 2,
    spaceBetween: 80,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2000, // Cambia el valor para ajustar el tiempo entre slides
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },

    },
  });
  