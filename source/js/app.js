// Tutorial
var first = 1,
    last = 12,
    current = first,
    prev_butt = document.querySelector('.switcher_button--prev'),
    wrapper = document.querySelector('.tutorial'),
    wrapper_class = wrapper.classList,
    header  = document.querySelector('.tutorial_header');

document.querySelector('.switcher').addEventListener('click', function(e) {
    var action = e.target.dataset.action;
    change_slide(action);
});

function change_slide(action) {
    if (action == 'prev') {
        wrapper_class.remove('slide--' + current);
        current--;
    } else if (current < last){
        current++;
        wrapper_class.add('slide--' + current);
    } else {
        preza.emit('changeSlide');
        return false;
    }

    if (current > first){
        prev_butt.disabled = false;
    } else {
        prev_butt.disabled = true;
    }
    switch (current) {
        case 1:
            header.innerHTML = 'инструкция по<br>эксплуатации сайта';
            break;
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
            header.innerHTML = 'Вы так же можете потренироваться и в других разделах мобильного приложения. Нажмите на кнопку и перейдите в интересующий вас раздел';
            break;
        case 10:
            header.innerHTML = 'Нажмите «Продолжить» после окончания видео ролика, чтобы перейти к следующему разделу<div class="button">Продолжить</div>';
            break;
        case 11:
            header.innerHTML = 'Нажмите «Начать тест», чтобы<br>пройти тестирование своих<br>знаний по обучающему<br>материалу<div class="button">Начать тест</div>';
            break;
        case 12:
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