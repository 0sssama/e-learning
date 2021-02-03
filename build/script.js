const header = document.querySelector('header')
window.onscroll = () => {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop
    if (scroll > 200) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
}