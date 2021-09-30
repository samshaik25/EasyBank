const hamburgerb = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByClassName('navbar-links')[0];
const image=document.querySelector(".hamburger-img")

hamburgerb.addEventListener('click', () => {
    nav.classList.toggle('active')
    console.log(nav.classList.toggle('active'));
    if(nav.classList.toggle('active')){
    image.src="./easybank-landing-page/images/icon-close.svg";
       }
    else{
    image.src="./easybank-landing-page/images/icon-hamburger.svg";

    }
})








// const hamburgerButton = document.getElementsByClassName('hamburger-button')[0];
// const navbarLinks = document.getElementsByClassName('nav-links')[0];
// const img=document.querySelector(".cross")

// hamburgerButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active')
//     console.log(navbarLinks.classList.toggle('active'));
//     if(navbarLinks.classList.toggle('active')){
//     img.src="./images/icon-close.svg";}
//     else{
//     img.src="./images/icon-hamburger.svg";

//     }
// })