const hamburgerIcon = document.querySelector ('.hamburger-icon')
const closeIcon = document.querySelector ('.close-icon')
const hamburgerMenu = document.querySelector ('.hamburger-menu')

hamburgerIcon.addEventListener('click', ()=> {
    hamburgerIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
    hamburgerMenu.classList.toggle('visible');
}
)

closeIcon.addEventListener('click', ()=> {
    closeIcon.classList.add('hide');
    hamburgerIcon.classList.remove('hide');
    hamburgerMenu.classList.toggle('visible');
}
)