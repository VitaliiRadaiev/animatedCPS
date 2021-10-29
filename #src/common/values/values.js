{
    let valueCardAllText = document.querySelectorAll('.values-card__text');
    if(valueCardAllText.length) {
        setSameHeight(valueCardAllText);
    }

    let couterItems = document.querySelectorAll('.values-card__num');
    if (couterItems) {
        couterItems.forEach(item => {
            let animation = anime({
                targets: item,
                textContent: [0, +item.innerText || 0],
                round: 1,
                easing: 'linear',
                autoplay: false,
                duration: 1000
            });
            const observer = new IntersectionObserver(
                entries => {
                    entries.forEach(entry => {
                        if (entry.intersectionRatio >= 0.7) {
                            animation.play();
                            observer.disconnect();
                        }
                    });
                },
                {
                    threshold: 0.7
                }
            );

            observer.observe(item);
        })
    }
}