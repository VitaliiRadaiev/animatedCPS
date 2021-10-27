{
    let partnersSlider = document.querySelector('.partners__slider');
    if(partnersSlider) {
        let sliderData = new Swiper(partnersSlider.querySelector('.swiper-container'), {
            
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            
            speed: 800,
            loop: true,
            pagination: {
            	el: partnersSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: partnersSlider.querySelector('.partners__slider-btn-next'),
                prevEl: partnersSlider.querySelector('.partners__slider-btn-prev'),
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
            },
        });
    }
}