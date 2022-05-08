import Slider from "./slider";

export default class MainSlider extends Slider {
    constructor(prevBtns, nextBtns) {
        super(prevBtns, nextBtns);
        try {
            this.popup = document.querySelector('.hanson');
        } catch (e) {}
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

    showPopup() {
        if (this.popup) {
            if (this.slideInex === 3) {
                setTimeout(() => {
                    this.popup.classList.add('animated', 'fadeInUp');
                    this.popup.style.display = 'block';
                }, 3000)
            } else {
                this.popup.style.display = 'none';
                this.popup.classList.remove('animated', 'fadeInUp');
            }
        }
    }

    render() {
        if (this.container) {
            this.showSlide(this.slideInex);
            this.nextBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.plusSlide(1);                        
                    this.showPopup();
                });
                btn.parentNode.previousElementSibling.addEventListener('click', () => {
                    this.slideInex = 1;
                    this.showSlide(this.slideInex);
                })
            });
        
        
            try {
                this.prevBtns.forEach(btn => {
                    btn.addEventListener('click', () => this.plusSlide(-1));
                })
            } catch (e) { console.log(e); }
        }    
    }
}