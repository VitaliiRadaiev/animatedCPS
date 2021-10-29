{
    let testimonialsSlider = document.querySelector('.testimonials__slider');
    if(testimonialsSlider) {
        let sliderData = new Swiper(testimonialsSlider.querySelector('.swiper-container'), {
            
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,

            //loop: true,
            pagination: {
            	el: testimonialsSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: testimonialsSlider.querySelector('.testimonials__slider-btn-next'),
                prevEl: testimonialsSlider.querySelector('.testimonials__slider-btn-prev'),
            },
        });
        
    }
}