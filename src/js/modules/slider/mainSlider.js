import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlide(n) {
        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        if (n > this.slides.length) {
            this.slideInex = 1;
        }

        if (n < 1) {
            this.slideInex = this.slides.length;
        }

        this.slides[this.slideInex - 1].style.display = 'block';
    }

    plusSlide(n) {
        this.showSlide(this.slideInex += n);
    }

    showPopup(popup) {
        if (this.slideInex === 3) {
            setTimeout(() => {
                popup.classList.add('animated', 'fadeInUp');
                popup.style.display = 'block';
            }, 3000)
        } else {
            popup.style.display = 'none';
            popup.classList.remove('animated', 'fadeInUp');
        }
    }

    render() {

        this.showSlide(this.slideInex);
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlide(1);
                try {
                    this.popup = document.querySelector('.hanson');
                    this.showPopup(this.popup);
                } catch (e) {}
            });
            btn.parentNode.previousElementSibling.addEventListener('click', () => {
                this.slideInex = 1;
                this.showSlide(this.slideInex);
            })
        });
    }
}