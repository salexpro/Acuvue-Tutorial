// Tutorial
var slide = 1,
    wrapper = document.querySelector('.tutorial'),
    wrapper_class = wrapper.classList,
    header  = document.querySelector('.tutorial_header');

wrapper.addEventListener('click', function () {
    change_slide();
});

function change_slide() {
    slide++;
    wrapper_class.add('slide--' + slide);
    switch (slide) {
        case 2:
            header.innerHTML = 'Чтобы выбрать материал для обучения нажмите в «Меню» на кнопку «Обучение».<br>После выберете тренинг, который хотите изучить.';
            break;
        case 3:
            header.innerHTML = 'Чтобы начать обучение,<br>нажмите на кнопку «Начать<br>обучение».<div class="button">НАЧАТЬ ОБУЧЕНИЕ</div>';
            break;
        case 4:
            header.innerHTML = 'Нажмите на язычок «Меню»,<br> чтобы открыть Меню для<br> перехода в другие разделы сайта<div class="tutorial_menu">Меню</div>';
            break;
        case 5:
            header.innerHTML = 'Воспользуйтесь стрелками для<br>перелистывания страниц<br>обучающего материала<div class="tutorial_arrows"><div class="tutorial_arr tutorial_arr--left"></div><div class="tutorial_arr tutorial_arr--right"></div></div>';
            break;
        case 6:
            header.innerHTML = 'Нажмите на значок «Play»,<br>чтобы запустить<br>обучающий видео ролик<div class="tutorial_play"></div>';
            break;
        case 7:
            header.innerHTML = 'Нажмите «Продолжить» после окончания видео ролика, чтобы перейти к следующему разделу<div class="button">Продолжить</div>';
            break;
        case 9:
            header.innerHTML = 'Введите любой логин и пароль.<br>Например, Логин – ABCDEF, Пароль – 123456<div class="button button--blue">войти</div>';
            break;
    }
}