{
    let locations = document.querySelector('.locations__body');
    if(locations) {
        let triggers = Array.from(document.querySelectorAll('.locations__tabs-nav-item'));
        let tabs = Array.from(document.querySelectorAll('.locations__tab-content'));

        const setActiveTab = (id) => {
            triggers.forEach(item => {
                if(item.dataset.id == id) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
            tabs.forEach(item => {
                if(item.dataset.id == id) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
        }

        let activeEl = triggers.find(i => i.classList.contains('active'));
        setActiveTab(activeEl.dataset.id);

        triggers.forEach(item => {
            item.addEventListener('click', () => {
                setActiveTab(item.dataset.id);
            })
        })
    }
}