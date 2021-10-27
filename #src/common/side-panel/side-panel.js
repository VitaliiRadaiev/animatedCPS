{
    let container = document.querySelector('.container');
    if (container) {
        let asidePanel = document.querySelector('.side-panel');
        if (asidePanel) {
            const setAsidePanelPosition = () => {
                if (document.documentElement.clientWidth > 992) {
                    let containerLeft = container.getBoundingClientRect().left;
                    if (containerLeft > 60) {
                        asidePanel.style.left = containerLeft - 40 + 'px';
                    } else {
                        asidePanel.style.left = '20px';
                    }
                }
            }

            setAsidePanelPosition();

            window.addEventListener('resize', setAsidePanelPosition);
        }
    }
}