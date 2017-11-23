var slide = 1,
    wrapper = document.querySelector('.tutorial'),
    wrapper_class = wrapper.classList,
    header  = document.querySelector('.tutorial_header'),
    header_class = header.classList,
    image   = document.querySelector('.tutorial_img img');

wrapper.addEventListener('click', function () {
    change_slide();
});

function change_slide() {
    slide++;
    wrapper_class.add('slide--' + slide);
    switch (slide) {
        case 2:
            header.innerHTML = 'Чтобы выбрать материал для обучения нажмите в «Меню» на кнопку «Обучение».<br>После выберете тренинг, который хотите изучить.';
            header_class.remove('tutorial_header--center');
            header_class.add('tutorial_header--left');
            break;
        case 3:
            image.src = './img/3.png';
            header.innerHTML = 'Чтобы начать обучение,<br>нажмите на кнопку «Начать<br>обучение».<div class="button">НАЧАТЬ ОБУЧЕНИЕ</div>';
            break;
    }
}