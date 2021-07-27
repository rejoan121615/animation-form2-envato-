// import files
import "../scss/style.scss";
import { gsap } from "gsap";

// disable click behave
document.querySelectorAll("a").forEach((item, index) => {
    item.addEventListener("click", (link) => {
        link.preventDefault();
    });
});

// animation setting

const timeline = gsap.timeline({ paused: true });
// animation section
timeline
    .to("#circle1_left", {
        transformOrigin: "80% 35%",
        rotate: 122,
        x: -10 + "%",
        y: 10 + "%",
        fill: "#e63946",
        duration: 1,
        delay: 0.3,
        animationPlayState: true,
    })
    .to(
        "#circle1_right",
        {
            rotate: 40,
            x: 307,
            y: -703.5,
            fill: "#e63946",
        },
        "<"
    )
    .to(
        "#circle2__left",
        {
            rotate: 60,
            fill: "#185ADB",
        },
        "<"
    )
    .to(
        "#circle2__right",
        {
            rotate: 213.5,
            x: 378,
            y: -358,
            fill: "#185ADB",
        },
        "<"
    )
    .to(
        "#portion_1",
        {
            rotate: 140,
            opacity: 0,
        },
        "<"
    )
    .to(
        "#portion_2",
        {
            rotate: 52,
            x: 178,
            y: 420,
            opacity: 0,
        },
        "<"
    )
    .to(
        "#portion_3",
        {
            rotate: 43,
            x: 558,
            y: 645,
            opacity: 0,
        },
        "<"
    )
    .to(
        "#portion_4",
        {
            rotate: 62,
            x: 430,
            y: 100,
            opacity: 0,
        },
        "<"
    )
    .to(
        "#first__circle",
        {
            x: -265,
        },
        "<"
    )
    .to(
        "#secound__circle",
        {
            x: -200,
            y: 190,
        },
        "<"
    );

// default setting
gsap.defaults({
    duration: 1.2,
    transformOrigin: "center",
});
// sign in
const registerBtn = document.querySelector("#sign_up_btn");
const logIn = document.querySelector("#sign_in_btn");

// trigger on click
registerBtn.addEventListener("click", () => {
    // form animation section
    gsap.timeline()
        .to("#sign__in", {
            opacity: 0,
            zIndex: 0,
            duration: 0.35,
        })
        .to("#sign__in", {
            display: "none",
            duration: 0,
        })
        .to("#sign__up", {
            opacity: 1,
            zIndex: 500,
            duration: 0.35,
            display: "block",
        });

    // animation play 
    timeline.play()
});

// sign in animation
logIn.addEventListener("click", () => {
    // form animation
    gsap.timeline()
        .to("#sign__up", {
            opacity: 0,
            zIndex: 0,
            duration: 0.5,
        })
        .to("#sign__up", {
            display: "none",
            duration: 0.1,
        })
        .to("#sign__in", {
            opacity: 1,
            zIndex: 500,
            display: "block",
            duration: 0.5,
        });

    // gsap timeline
    timeline.reverse();
});
