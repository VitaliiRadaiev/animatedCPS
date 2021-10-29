{
    let verifyCardSlider = document.querySelector('.verify-card__slider');
    if(verifyCardSlider) {
        let sliderData = new Swiper(verifyCardSlider.querySelector('.swiper-container'), {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            loop: true,
            navigation: {
                nextEl: verifyCardSlider.querySelector('.partners__slider-btn-next'),
                prevEl: verifyCardSlider.querySelector('.partners__slider-btn-prev'),
            },
        });
        
    }

    let verifyFormItems = document.querySelector('.verify-form__items');
    let verifyFormCard = document.querySelector('.verify-form__card');
    if(verifyFormItems && verifyFormCard) {
        const setFromCardPosition = () => {
            verifyFormCard.style.top = verifyFormItems.offsetTop + 14 + 'px';
        }

        setFromCardPosition();

        window.addEventListener('resize', setFromCardPosition);
    }
}