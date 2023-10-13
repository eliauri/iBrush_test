// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там


// Подключение плагина бургер меню
import { burger } from './functions/burger'

// Подключение плагина модалки
import { modal } from './functions/modal'

// Подключение свайпера
import Swiper, { Pagination } from 'swiper';
Swiper.use([
    Pagination,
]);
var init = false;
var swiper;
function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".posts__swiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: ".posts__pagination",
                    clickable: true
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);

// Подключение select
import Choices from 'choices.js'
const choices = new Choices('#select', {
    searchEnabled: false,
    itemSelectText: '',
});

// import { svgxuse } from 'svgxuse'