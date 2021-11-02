{
    let specializationsSlider = document.querySelector('.specializations__slider');
    if(specializationsSlider) {
        let sliderData = new Swiper(specializationsSlider.querySelector('.swiper-container'), {
            
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 800,
            loop: true,
            pagination: {
            	el: specializationsSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: specializationsSlider.querySelector('.partners__slider-btn-next'),
                prevEl: specializationsSlider.querySelector('.partners__slider-btn-prev'),
            },
            watchSlidesVisibility: true,
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1268: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            },
        });

        
        let id = setInterval(() => {
            sliderData.update();
        }, 200)
        setTimeout(() => {
            clearInterval(id);
        }, 1000)
    }
}