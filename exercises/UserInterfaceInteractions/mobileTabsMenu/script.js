const links = document.querySelectorAll('#navbar > a');

links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach((link) => {
            link.classList.remove('active');
        })
        link.classList.toggle('active');
    })
})

function adjustIconSize() {
    if(screen.width > 1000) {
        links.forEach((link) => {
            link.classList.remove('fa-5x')
            link.classList.add('fa-3x')
        })
    } else {
        links.forEach((link) => {
            link.classList.add('fa-5x')
            link.classList.remove('fa-3x')
        })
    }
}

window.onload = () => {
    adjustIconSize();
}


window.addEventListener('resize', () => {
    adjustIconSize();
})