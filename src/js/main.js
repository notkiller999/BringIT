import MainSlider from "./modules/slider/mainSlider";
import VideoPlayer from './modules/videoPlayer';
import MiniSlider from './modules/slider/miniSlider';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const slider = new MainSlider({container: '.page', btns: '.next'});
    slider.render();

    const player = new VideoPlayer('.play', '.overlay');
    player.init();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prevBtn: '.showup__content .showup__prev',
        nextBtn: '.showup__content .showup__next',
        animation: true,
        activeClass: 'card-active'
    });

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prevBtn: '.modules__info-btns .slick-prev',
        nextBtn: '.modules__info-btns .slick-next',
        animation: true,
        activeClass: 'card-active'
    });

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prevBtn: '.feed__slider .slick-prev',
        nextBtn: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });

    feedSlider.init();
    modulesSlider.init();
    showUpSlider.init();
})