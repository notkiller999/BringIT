import MainSlider from "./modules/slider/mainSlider";
import VideoPlayer from './modules/videoPlayer';
import MiniSlider from './modules/slider/miniSlider';
import ShowCards from './modules/showCards';
import Forms from "./modules/forms";
import CheckInput from './modules/checkInput';
import Mask from './modules/mask';
import Accordion from './modules/accordion';
import Download from './modules/download';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const slider = new MainSlider({container: '.page', nextBtns: '.next'});
    slider.render();

    const moduleSlider = new MainSlider({
        container: '.moduleapp', nextBtns: '.next', prevBtns: '.prev'
    })

    moduleSlider.render();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prevBtns: '.showup__content .showup__prev',
        nextBtns: '.showup__content .showup__next',
        animation: true,
        activeClass: 'card-active'
    });

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prevBtns: '.modules__info-btns .slick-prev',
        nextBtns: '.modules__info-btns .slick-next',
        animation: true,
        activeClass: 'card-active'
    });

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prevBtns: '.feed__slider .slick-prev',
        nextBtns: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });

    new ShowCards('.officernew').init();
    new ShowCards('.officerold').init();
    new CheckInput('[name="email"]').init();

    new Forms().sendForm();
    new Mask('[name="phone"]').init();
    new Accordion('.module__info-show .plus').init();

    feedSlider.init();
    modulesSlider.init();
    showUpSlider.init();

    new Download('.download').init();
})