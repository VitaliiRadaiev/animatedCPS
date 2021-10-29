{
    let teamSlider = document.querySelector('.team__slider');
    if(teamSlider) {
        let sliderData = new Swiper(teamSlider.querySelector('.swiper-container'), {
            
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            
            speed: 800,
            loop: true,
            pagination: {
            	el: teamSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            navigation: {
                nextEl: teamSlider.querySelector('.partners__slider-btn-next'),
                prevEl: teamSlider.querySelector('.partners__slider-btn-prev'),
            },
            
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
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            },
            on: {
                afterInit: function() {
                    let teamCardAll = document.querySelectorAll('.team-card');
                    if(teamCardAll.length) {
                        teamCardAll.forEach(card => {
                            let title = card.querySelector('.team-card__title');
                            let bottomLine = card.querySelector('.team-card__bottom');
                            let padding = 28;

                            const setPadding = () => {
                                if(document.documentElement.clientWidth < 576) {
                                    padding = 8;
                                }
                            }

                            const setBottomHeight = () => {
                                bottomLine.style.height = title.clientHeight + padding + 'px';
                            }

                            const setPositionTitle = () => {
                                let bottomLength = card.clientHeight - title.clientHeight - title.offsetTop - (padding / 2);
                                title.style.transform = `translateY(${bottomLength}px)`;
                            }

                            setPadding();
                            setBottomHeight();
                            setPositionTitle();

                            window.addEventListener('resize', () => {
                                setPadding();
                                setBottomHeight();
                                setPositionTitle();
                            })
                        })
                    }
                }
            }
        });
    }
}