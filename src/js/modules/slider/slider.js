export default class Slider {
    constructor({container = null, nextBtns = null, prevBtns = null, animation, autoplay, activeClass = ''} = {}) {
        this.container = document.querySelector(container);
        try {
            this.slides = this.container.children;
        } catch (e) {}
        this.nextBtns = document.querySelectorAll(nextBtns);
        this.prevBtns = document.querySelectorAll(prevBtns);
        this.animation = animation;
        this.autoplay = autoplay;
        this.activeClass = activeClass;
        this.slideInex = 1;
    }   
}