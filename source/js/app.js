var slide = 1;
var wrapper = document.querySelector('.tutorial');
var header = document.querySelector('.tutorial_header')
wrapper.addEventListener('click', function () {
    slide++;
    switch (slide) {
        case 2:
            header.innerHTML = '';
            break;
        case 3:
            break;
    }
});