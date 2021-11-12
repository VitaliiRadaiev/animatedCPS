{
    let testimonialsSlider = document.querySelector('.testimonials__slider');
    if(testimonialsSlider) {
        let sliderData = new Swiper(testimonialsSlider.querySelector('.swiper-container'), {
            
            // autoplay: {
            //     delay: 4000,
            //     disableOnInteraction: false,
            // },
            
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
            on: {
                beforeInit: () => {

                }
            }
        });

        let id = setInterval(() => {
            sliderData.update();
        }, 200)
        setTimeout(() => {
            clearInterval(id);
        }, 1000)

        let allTestimonials = document.querySelectorAll('.testimonials__slider-text');
        if(allTestimonials.length) {
            allTestimonials.forEach(item => {
               let stringLength = 100;
               let btn = item.querySelector('a');
               if(!btn) {
                   btn = document.createElement('a');
                   btn.innerText = 'Read More';
                } else {
                    btn.remove();

                }
               let str = item.innerText;
               if(str.length <= stringLength) return;
               item.innerText = [...str].slice(0, stringLength).join('') + '...';
               item.append(btn);

               btn.addEventListener('click', (e) => {
                   e.preventDefault();
                   item.innerText = str;
                   btn.remove();
                   sliderData.update();
               })
            })
        }
        
    }
}