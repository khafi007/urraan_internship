let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
let prevbtn = document.querySelector(".prev-btn");
let nextbtn = document.querySelector(".next-btn");
let dots = document.querySelectorAll(".dot");

let slideidx = 0;

slides[slideidx].classList.add("active");
dots[slideidx].classList.add("active");

prevbtn.addEventListener('click', prevslide);
nextbtn.addEventListener('click', nextslide);


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideidx].classList.add("active");
}

function prevslide() {
    slides[slideidx].classList.remove('active');
    slideidx = (slideidx === 0) ? slides.length - 1 : slideidx - 1;
    slides[slideidx].classList.add("active");
    slider.style.transform = `translateX(-${slideidx * 100}%)`;
    updateDots();
}

function nextslide() {
    slides[slideidx].classList.remove('active');
    slideidx = (slideidx === slides.length - 1) ? 0 : slideidx + 1;
    slides[slideidx].classList.add("active");
    slider.style.transform = `translateX(-${slideidx * 100}%)`;
    updateDots();
}

function goToSlide(index) {
    slides[slideidx].classList.remove('active');
    slideidx = index;
    slides[slideidx].classList.add("active");
    slider.style.transform = `translateX(-${slideidx * 100}%)`;
    updateDots();
}