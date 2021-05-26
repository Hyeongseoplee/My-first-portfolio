'use strict'

/*scrolled by clicking the each menu */
const navbarMenus = document.querySelector(".navBar__menu");


navbarMenus.addEventListener('click', (event)=>{
    const link = event.target.dataset.link;
    if(link === undefined){
        return;
    }
    const screen = document.querySelector(link);
screen.scrollIntoView({behavior:"smooth"});
})

/* handle click on ""contact me" button on button */

const contactBtn = document.querySelector(".home__contact");
const footer = document.querySelector(".footer");

contactBtn.addEventListener('click', (event) => {
footer.scrollIntoView({behavior:"smooth"});
})

/* Make a tranparent Home*/

const home = document.querySelector(".home");
const homeSection = document.querySelector(".section__container")
const homeHeight = homeSection.getBoundingClientRect().height;

console.log(homeHeight);
document.addEventListener('scroll', ()=>{
    homeSection.style.opacity= 1 - window.scrollY/homeHeight;
})