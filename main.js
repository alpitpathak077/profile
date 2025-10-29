let menu = document.queryselector('#menu-icon');
let navbar = document.queryselector('.navbar');
let header = document.queryselector('.header');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow',window.scrollY >0);
});
const sr = scrolReveal ({
    distance: '60px',
    duration: 2500,
    delay:400,
    reset: true
});
sr.reveal('.home-text',{delay:200, origin:'top'});
sr.reveal('.home-text',{delay:200, origin:'top'});
sr.reveal('.about-title, .about-text, .heading, .box, input, textarea',{delay:400, origin:'top'});

// function addAnimation() {
//     const animatedItems = document.querySelectorAll('.animate-fade-in');
//     animatedItems.forEach((item, index) => {
//         item.style.animationDelay = `${index * 0.2}s`;
//         item.classList.add('fade-trigger');
//     });
// }
