const header = document.querySelector('header')
function scrollFunction() {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop
    if (scroll > 200) {
        if (!header.classList.contains('scrolled')) {
            header.classList.add('scrolled')
        }
    } else {
        header.classList.remove('scrolled')
    }
}
window.onload = () => {
    const inLanding = window.location.pathname === '/'
    if (inLanding) {
        setInterval(()=>{scrollFunction()}, 50)
    }
}