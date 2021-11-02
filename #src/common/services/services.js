{
    let servicesSlider = document.querySelector('.services__slider');
    if(servicesSlider) {
        let sliderData = new Swiper(servicesSlider.querySelector('.swiper-container'), {
            
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 800,
            loop: true,
            pagination: {
            	el: servicesSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: servicesSlider.querySelector('.partners__slider-btn-next'),
                prevEl: servicesSlider.querySelector('.partners__slider-btn-prev'),
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
            on: {
                afterInit: function() {
                    let cardTitleAll = servicesSlider.querySelectorAll('.services-card__title');
                    if(cardTitleAll.length) {
                        setSameHeight(cardTitleAll);
                    }
                }
            }
        });

        let id = setInterval(() => {
            sliderData.update();
        }, 200)
        setTimeout(() => {
            clearInterval(id);
        }, 1000)
    }
}