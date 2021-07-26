import '../scss/style.scss';



let getLink = document.querySelectorAll('button');

getLink.forEach((item, index) => {
    item.addEventListener('click', (link) => {
        link.preventDefault()
    })
})
document.querySelectorAll('a').forEach((item, index) => {
    item.addEventListener('click', (link) => {
        link.preventDefault()
    })
})