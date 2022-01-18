const profileImg = new Image()
// Finds dimensions of selected profile image and inserts values into
// CSS calculation of div height.
profileImg.onload = function () {
    var root = document.querySelector(':root')

    let width = this.width
    let height = this.height

    root.style.setProperty(
        '--bg-img-ratio',
        `calc(${height} / ${width} * 100vw)`
    )
}
profileImg.src = '/img/julianprague.jpg'
