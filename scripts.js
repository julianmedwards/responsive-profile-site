const profileImg = new Image()
// *Mobile - Finds dimensions of selected profile image and inserts values into
// CSS calculation of div height.
profileImg.onload = function () {
    let root = document.querySelector(':root')

    let width = this.width
    let height = this.height

    root.style.setProperty(
        '--bg-img-ratio',
        `calc(${height} / ${width} * 100vw)`
    )
}
profileImg.src = '/img/julianprague.jpg'

// Move bio elements into correct flex container on devices larger than
// mobile.
const mainTitle = document.getElementById('main-title')
const bio = document.getElementById('bio')
const content = document.getElementById('content')

function moveBio() {
    let viewportWidth =
        window.innerWidth || document.documentElement.clientWidth
    if (viewportWidth > 480 && bio.parentNode === content) {
        mainTitle.appendChild(bio)
    } else if (viewportWidth <= 480 && bio.parentNode === mainTitle) {
        content.appendChild(bio)
    }
}
window.onload = moveBio
window.addEventListener('resize', moveBio)

// Off-canvas toggle nav menu on phone.
function toggleNav() {
    let navmenu = document.getElementById('navmenu')
    if (navmenu.style.width != '100%') {
        navmenu.style.width = '100%'
        document.querySelector('#page-title').style.color = '#0872b4'
        document.querySelector('#page-title i').style.color = '#0872b4'
    } else {
        document.getElementById('navmenu').style.width = '0'
        document.querySelector('#page-title').style.color = '#313131'
        document.querySelector('#page-title i').style.color = '#acacac'
    }
}
