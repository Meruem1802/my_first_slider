const btnPrev = document.getElementById('btn-prev'),
    btnNext = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot'),
    slider = document.querySelector('.slider-wrapper');

let index = 0;
let time = 2000;

const prepareSlide = () => {
    for (let item of slides) {
        item.classList.remove('active');
    }
    for (let item of dots) {
        item.classList.remove('active');
    }

    slides[index].classList.add('active');
    dots[index].classList.add('active');
};

const nextSlide = () => {
    index++;
    if (index == slides.length) {
        index = 0;
        prepareSlide();
    } else {
        prepareSlide();
    }
};

const prevSlide = () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
        prepareSlide();
    } else {
        prepareSlide();
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareSlide();
    });
});

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);
slider.addEventListener('mouseover', () => {
    clearInterval(timerID);
});
slider.addEventListener('mouseout', () => {
    timerID = setInterval(nextSlide, 2000);;
});
timerID = setInterval(nextSlide, 2000);