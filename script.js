// images animation
var tl = gsap.timeline({
    repeat: -1
});


tl.to(".imagecontainer", {
    ease: Expo.easeInout,
    width: "100%",
    stagger: 2
}, 'a')
    .to(".text h1", {
        ease: Expo.easeInout,
        stagger: 2,
        top: 0
    }, 'a')
    .to(".text h1", {
        delay: 2,
        ease: Expo.easeInout,
        stagger: 2,
        top: "-100%"
    }, 'a')


// menu-icon

const menuBtn = document.querySelector('.menu-btn');
const menuOverlay = document.querySelector('.menu-overlay');
const crossBtn = document.querySelector('.menu-overlay>i');

menuBtn.addEventListener("click", () => {
    menuOverlay.style.transform = "translatex(0)";
});
crossBtn.addEventListener("click", () => {
    menuOverlay.style.transform = "translatex(100%)";
});