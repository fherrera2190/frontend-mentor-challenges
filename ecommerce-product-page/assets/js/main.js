const toggleBtn = document.getElementById('toggleBtn');
const iconMenu = document.getElementById('icon-menu');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

let toggleBtnState = false;

toggleBtn.addEventListener('click', () => {

    if (toggleBtnState === false) {
        toggleBtnState = true;
        sidebar.classList.add('active');
        iconMenu.src = "./assets/images/icon-close.svg";
        overlay.classList.remove('hidden');
    } else {
        toggleBtnState = false;
        sidebar.classList.remove('active');
        overlay.classList.add('hidden');
        iconMenu.src = "./assets/images/icon-menu.svg";
    }
});

overlay.addEventListener('click', () => {
    toggleBtnState = false;
    sidebar.classList.remove('active');
    overlay.classList.add('hidden');
    iconMenu.src = "./assets/images/icon-menu.svg";
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
