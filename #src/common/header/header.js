{
    let header = document.querySelector('.header');
    if (header) {
        let menu = document.querySelector('.menu');
        let btnMenuClose = document.querySelector('.menu__close');
        let burger = burgerHandler();

        const menuOpen = () => {
            menu.classList.add('open');
        }
        const menuClose = () => {
            menu.classList.remove('open');
            burger.close();
        }
        const menuToggle = () => {
            menu.classList.toggle('open');
        }

        burger.el.addEventListener('click', () => {
            menuToggle();
            burger.toggle();
        })

        btnMenuClose.addEventListener('click', menuClose);

        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 50);
        })


        let slideItems = header.querySelectorAll('.menu-item-has-children');
        if (slideItems.length) {
            slideItems.forEach(item => {
                let title = item.querySelector('.menu__link');
                let subMenu = item.querySelector('.sub-menu');

                title.addEventListener('click', (e) => {
                    if (document.documentElement.clientWidth < 992) {
                        e.preventDefault();
                        title.classList.toggle('open');
                        _slideToggle(subMenu);

                        slideItems.forEach(i => {
                            if (i === item) return;

                            let title = i.querySelector('.menu__link');
                            let subMenu = i.querySelector('.sub-menu');

                            title.classList.remove('open');
                            _slideUp(subMenu);
                        })
                    }
                })
            })
        }
    }
}


