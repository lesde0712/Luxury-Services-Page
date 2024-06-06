const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".menuItem").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const navBar = document.querySelector('.navBar');
const initialPosition = navBar.offsetTop;

function checkNavBarPosition() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > initialPosition) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', checkNavBarPosition);