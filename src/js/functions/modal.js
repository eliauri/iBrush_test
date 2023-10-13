
import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

let modalButtons = document?.querySelectorAll('.open-modal');
let overlay = document?.querySelector('#overlay-modal');
let closeButtons = document?.querySelectorAll('.modal__close');
let body = document?.getElementsByTagName('body')[0];


modalButtons?.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.modal.active') && document.querySelector('.modal.active').classList.remove('active');
        let modalId = this.getAttribute('data-modal');
        let modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
        modalElem.classList.add('active');
        overlay.classList.add('active');
        disableScroll();
    });
});

overlay?.addEventListener('click', function () {
    const activeModal = document.querySelector('.modal.active');
    activeModal?.querySelector('iframe')?.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    activeModal.classList.remove('active');
    this.classList.remove('active');
    enableScroll();
});

closeButtons?.forEach(function (item) {
    item.addEventListener('click', function (e) {
        var parentModal = this.closest('.modal');
        parentModal.classList.remove('active');
        overlay.classList.remove('active');
        enableScroll();
    });
});



const wpcf7Elm = document?.querySelector('.wpcf7');

wpcf7Elm?.addEventListener('wpcf7mailsent', function (event) {
    setTimeout(() => {
        document.querySelector('.modal.active') && document.querySelector('.modal.active').classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('stop-scroll')
    }, 1000);
}, false);