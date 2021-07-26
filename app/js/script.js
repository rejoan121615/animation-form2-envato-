import '../scss/style.scss';
import { gsap } from 'gsap';



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


// sign in 
const signUp = document.querySelector("#sign_up_btn");
const targetAnimation = gsap.utils.selector("#animation svg path");

// signUp.addEventListener('click', () => {
//     gsap.fromTo("#an_svg #circle1_left", {
//         transformOrigin: '75% 40%',
//         rotate: 125,
//     });
// })

gsap.to("#circle1_left", {
    transformOrigin: "75% 40%",
    rotate: 125,
    duration: 1,
    delay: 0.5
});

console.log(gsap.utils.toArray("#first__circle half_circle"));


// sign up 










