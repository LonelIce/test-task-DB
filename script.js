const blockNav = document.getElementById('nav');
const menu = document.getElementById('menu');
const navLink = document.querySelectorAll('.nav-link');
const field = document.getElementById('field');
const fieldLine = document.getElementById('field-line');
const logo = document.querySelector('.logo');
const search = document.querySelector('.search');
const mainSlide = document.querySelector('.main-slide');
const slides = mainSlide.querySelectorAll('.slide')
const switches = document.querySelector('.switches')
const slidesCount = slides.length;

function addMenu(isMenu) {
    if (isMenu) {
        blockNav.style.height = "0";
        blockNav.style.opacity = "0"
        return false
    } else {
        blockNav.style.height = "45vh";
        blockNav.style.opacity = "1"
        return true
    }
}

function addField(isField) {
    if (isField) {
        logo.classList.remove('hidden')
        search.style['flex-grow'] = "0";
        fieldLine.classList.remove('open');
        field.style['background-color'] = "transparent";
        return false
    } else {
        logo.classList.add('hidden')
        search.style['flex-grow'] = "1";
        fieldLine.classList.add('open')
        field.style['background-color'] = "var(--separator)";
        return true
    }
}

function addToggleClass(element, newClassName) {
    deleteToggleClass(newClassName);
    element.classList.add(newClassName);
}

function deleteToggleClass(className) {
    const element = document.querySelector(`.${className}`);
    element.classList.remove(className);
}

function clearActiveClasses() {
    slides.forEach((slide => {
        slide.classList.remove('active');
    }))
}

for (let i = 0; i < slidesCount; i++) {
    const square = document.createElement('div')
    square.classList.add('switch-el');
    if (i === 0)
        square.classList.add('current');
    square.addEventListener("click", () => {
        addToggleClass(square, "current");
        clearActiveClasses();
        slides[i].classList.add('active');
    });
    switches.append(square);
}

let isMenu = false;
menu.addEventListener("click", () => {
    let availableScreenWidth = window.screen.availWidth;
    if (availableScreenWidth < 576)
        isMenu = addMenu(isMenu);
});
let isField = false;
field.addEventListener("click", () => {
    let availableScreenWidth = window.screen.availWidth;
    if (availableScreenWidth < 576)
        isField = addField(isField);
});
for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", () => {
        addToggleClass(navLink[i], "active");
    });
}
