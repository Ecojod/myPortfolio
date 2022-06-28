import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Navigation
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle") /* To show/close the menu */
const navClose = document.getElementById("nav-close") /* To show/close the menu */

// ======================= Show Menu =============================
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

// ======================= Menu Hidden =============================
// validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}

// ======================= Remove Menu inside button when we click on each button like home contact and etc =============================
const navLinks = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    // when we click on each nav link, we remove the show menu class 
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener("click", linkAction))

// ======================= Change background header =============================
function scrollHeader() {
    const header = document.getElementById("header")
    // when the scroll is greater than the 80vh, add the class scroll header to the header 
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)









//theme/display customization
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".theme-customization");
const fontSizes = document.querySelectorAll('.choose-size span')
const colorPallete = document.querySelectorAll('.choose-color span')
var root2 = document.querySelector(':root');

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('theme-customization')) {
        themeModal.style.display = 'none';
    }
}
theme.addEventListener("click", openThemeModal)
themeModal.addEventListener("click", closeThemeModal)


//fonst 
const removSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size =>{
    size.addEventListener('click', ()=>{
        removSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1')){
            fontSize = '12px';
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '14px';
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '18px';
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})

// primary colors 
colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');
        root2.style.setProperty('--primary-color-hue', primaryHue);
    })
})