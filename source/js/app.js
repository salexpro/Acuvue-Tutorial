// Tutorial
var slide = 1,
    wrapper = document.querySelector('.tutorial'),
    wrapper_class = wrapper.classList,
    header  = document.querySelector('.tutorial_header');

wrapper.addEventListener('click', function () {
    change_slide();
});

var change = setInterval(function() {
    change_slide();
}, 8000);

function change_slide() {
    if(slide < 11){
        slide++;
        wrapper_class.add('slide--' + slide);
    } else {
        clearInterval(change);
        return false;
    }
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
        case 8:
            header.innerHTML = 'Введите любой логин и пароль.<br>Например, Логин – ABCDEF, Пароль – 123456. Нажмите на кнопку – ВОЙТИ. И потренируйтесь в работе с приложением для сотрудников оптик.<div class="button button--blue">войти</div>';
            break;
        case 9:
            header.innerHTML = 'Нажмите «Продолжить» после окончания видео ролика, чтобы перейти к следующему разделу<div class="button">Продолжить</div>';
            break;
        case 10:
            header.innerHTML = 'Нажмите «Начать тест», чтобы<br>пройти тестирование своих<br>знаний по обучающему<br>материалу<div class="button">Начать тест</div>';
            break;
        case 11:
            header.innerHTML = 'Для того, чтобы выбрать<br>вариант ответа нажмите на<br>него После нажатия<br> изменится цвет на темно<br>синий';
            break;
        default:
            break;
    }
}

// Resize
var $el = document.querySelector('.tutorial_inner');
var elWidth = $el.clientWidth;
var elHeight = $el.clientHeight;

var $wrapper = wrapper;

window.onresize = function() {
    var sizes = {
        size: {
            width: $wrapper.clientWidth,
            height: $wrapper.clientHeight
        }
    }
    doResize(null, sizes)
}

function doResize(event, ui) {

    var scale, origin;

    scale = Math.min(
        ui.size.width / elWidth,
        ui.size.height / elHeight
    );

    $el.style = 'transform: translate3d(-50%, -50%, 0) scale(' + scale + ')';
}

var starterData = {
    size: {
        width: $wrapper.clientWidth,
        height: $wrapper.clientHeight
    }
}
doResize(null, starterData);