function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


const $cookieEl = document.getElementById('cookieMessage');
if ($cookieEl) {
    let closeBtn = document.querySelector('.cookies-message__agree');

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        $cookieEl.classList.remove('show');

        document.cookie = encodeURIComponent('hide-cookie') + "=" + encodeURIComponent('true') + "; path=/; max-age=86400";
    })


    if (!getCookie('hide-cookie')) {
        setTimeout(() => {
            $cookieEl.classList.add('show');
        }, 1000);
    }

}