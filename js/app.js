document.querySelectorAll('.slider').forEach((n, i) => {
    window[`slider${i+1}`] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        speed: 5,
        loop: true,
        autoplay: {
            delay: 0,
        },
        direction : 'vertical',
        mousewheel : true,
        slidesPerView : 1.75,
        slidesOffsetBefore : -125,
    })
})

bindSwipers(slider1, slider2, slider3, slider4)
