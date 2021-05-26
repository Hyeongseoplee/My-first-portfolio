'use strict'

const navbar = document.querySelector(".navBar");
const navbarHeight = navbar.offsetHeight;  

function handleScroll(){
    if(window.scrollY > navbarHeight){
        navbar.classList.add("navbar--violet");
    }else{
        navbar.classList.remove("navbar--violet");
    }
}

function init(){
    window.addEventListener('scroll', handleScroll)
}
init();


const toggleBtn = document.querySelector(".navBar__toggle-btn");
const menus = document.querySelector(".navBar__menu");

toggleBtn.addEventListener('click', () => {
    menus.classList.toggle("hide");
})

