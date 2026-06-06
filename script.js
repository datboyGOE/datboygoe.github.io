var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        800: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
    }
});