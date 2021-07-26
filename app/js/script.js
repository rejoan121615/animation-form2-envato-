import '../scss/style.scss';



let getLink = document.querySelectorAll('button');

getLink.forEach((item, index) => {
    item.addEventListener('click', (link) => {
        link.preventDefault()
    })
})
// document.querySelectorAll('a').forEach((item, index) => {
//     item.addEventListener('click', (link) => {
//         link.preventDefault()
//     })
// })


// sign in 
const signIn = document.querySelector('#sign_in_btn');


signIn.addEventListener('click', () => {
    
})


// sign up 
const signUp = document.querySelector('#sign_up_btn');









