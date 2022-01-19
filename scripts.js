const profileImg = new Image()
// Finds dimensions of selected profile image and inserts values into
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

// Toggle off-canvas nav menu on phone.
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
