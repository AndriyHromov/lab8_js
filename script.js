const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

burger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i) {
    index = i;

    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

document.getElementById("next").addEventListener("click", () => {
    index++;

    if (index > 2) {
        index = 0;
    }

    showSlide(index);
});

document.getElementById("prev").addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = 2;
    }

    showSlide(index);
});

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        showSlide(Number(dot.dataset.index));
    });
});

setInterval(() => {
    index++;

    if (index > 2) {
        index = 0;
    }

    showSlide(index);
}, 3000);
