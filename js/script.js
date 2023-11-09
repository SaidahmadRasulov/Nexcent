const menu = document.querySelector('.gamburger__menu')
const navbar = document.querySelector('.navbar')

function ToggleMenu() {
    menu.classList.toggle('hide')
}

window.addEventListener('scroll', () => {
    if(window.scrollY > 10) {
        navbar.classList.add('fixed')
        navbar.classList.remove('container')
    } else {
        navbar.classList.remove('fixed')
        navbar.classList.add('container')
    }
})