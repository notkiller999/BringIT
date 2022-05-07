export default class Slider {
    constructor({container = null, btns = null, nextBtn = null, prevBtn = null, animation, autoplay, activeClass = ''} = {}) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.btns = document.querySelectorAll(btns);
        this.nextBtn = document.querySelector(nextBtn);
        this.prevBtn = document.querySelector(prevBtn);
        this.animation = animation;
        this.autoplay = autoplay;
        this.activeClass = activeClass;
        this.slideInex = 1;
    }   
}