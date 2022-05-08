import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(container, nextBtns, prevBtns, animation, autoplay, activeClass, remove) {
        super(container, nextBtns, prevBtns, animation, autoplay, activeClass, remove);
    }

    decorizeSlide() {
        if (this.animation) {
            this.slides.forEach(slide => {
                slide.classList.remove(this.activeClass);
                slide.querySelector('.card__title').style.opacity = '0.4';
            });
            this.slides[0].classList.add(this.activeClass);
            this.slides[0].querySelector('.card__title').style.opacity = '1';
        } else {
            this.slides.forEach(slide => {
                slide.classList.remove(this.activeClass);
            });
            this.slides[0].classList.add(this.activeClass);
        }
    }

    nextSlide() {
        if (this.slides[1].tagName === 'BUTTON') {
            while (this.slides[1].tagName === 'BUTTON') {
                this.container.appendChild(this.slides[1]);
            }
        } 
            this.container.appendChild(this.slides[0]);
            this.decorizeSlide();
        
    }

    prevSlide() {
        const length = this.slides.length - 1;
        if (this.slides[length - 1].tagName === 'BUTTON') {
            while (this.slides[length - 1].tagName === 'BUTTON') {
                this.slides[1].after(this.slides[length - 1]);
            }
        } 
            this.container.prepend(this.slides[length]);
            this.decorizeSlide();
        
        
    }
    

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
            this.nextBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.nextSlide();
                });
            })

            this.prevBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.prevSlide();
                });
            })

            this.decorizeSlide();
        } catch(e) {}
    }


}