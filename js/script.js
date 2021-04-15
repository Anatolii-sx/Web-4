const sliderNext = document.querySelector('.main-section3-slider-btn-right');
const sliderPrev = document.querySelector('.main-section3-slider-btn-left');
const sliderLine = document.querySelector('.main-section3-slider-line');

const choiceBtn = document.querySelectorAll('.main-section3-btn-choice');

let position = 0;

sliderNext.onclick = sliderRight;
sliderPrev.onclick = sliderLeft;

choiceBtn[0].onclick = main1;
choiceBtn[1].onclick = main2;
choiceBtn[2].onclick = main3;

// Удаление класса focus со всех кнопок

function choiceBtnRemove() {
    for (let i = 0; i < choiceBtn.length; i++) {
        choiceBtn[i].classList.remove('btn-choice-focus')
    }
}

// Добавление класса focus первой кнопке
// choiceBtn[0].classList.add('btn-choice-focus');

choiceBtn[0].click(); // Изначальный клик первой кнопки



// При нажатии на конпки 1, 2, 3 изменение position

function main1() {
    position = 0;
    sliderLine.style.left = position + 'px';
    choiceBtnRemove();
    choiceBtn[0].classList.add('btn-choice-focus');
}

function main2() {
    position = -1012;
    sliderLine.style.left = position + 'px';
    choiceBtnRemove();
    choiceBtn[1].classList.add('btn-choice-focus');
}

function main3() {
    position = -2024;
    sliderLine.style.left = position + 'px';
    choiceBtnRemove();
    choiceBtn[2].classList.add('btn-choice-focus');
}


// При нажатии на правую кнопку слайдера изменение position  + связь с кнопками

function sliderRight() {
    position = position - 1012;
    if (position == 0) {
        main1();
    }
    else if (position == -1012) {
        main2();
    }
    else if (position == -2024) {
        main3();
    }
    else if (position < -2024) {
        main1();
    }
    sliderLine.style.left = position + 'px';
}

// При нажатии на левую кнопку слайдера изменение position + связь с кнопками

function sliderLeft() {
    position = position + 1012;
    if (position == 0) {
        main1();
    }
    else if (position == -1012) {
        main2();
    }
    else if (position > 0) {
        main3();
    }
    sliderLine.style.left = position + 'px';
}

// Переключение слайдера стрелками клавиатуры

document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.key == "ArrowRight") {
        sliderRight();
    }
    else if (event.key == "ArrowLeft") {
        sliderLeft();
    }
});


// АДАПТИВ

// let screenWidth = screen.width;

// g();

// function g() {
//     if (screenWidth <= 1024 && screenWidth >= 768) {
//     }

//     else if (screenWidth < 768) {
//         choiceBtnRemove()
//     }

//     else {
//     }
//     console.log(screenWidth);
// }


// Modal window

window.addEventListener('scroll', modalWindow);

function modalWindow() {
    if (window.pageYOffset > 1000) {
        document.querySelector('.modal-wrp').style.display = 'inherit';
        window.removeEventListener('scroll', modalWindow)
    }
}

document.querySelector('.close-btn').onclick = function () {
    document.querySelector('.modal-wrp').style.display = 'none';
}