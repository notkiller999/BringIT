export default class Accordion {
    constructor(btns) {
        this.btns = document.querySelectorAll(btns);
    }

    bindBtn() {
        this.btns.forEach(btn => {
            const content = btn.closest('.module__info-show').nextElementSibling;
            btn.addEventListener('click', () => this.showAccordion(content))
        })
    }



    showAccordion(content) {
        content.classList.toggle('active');
        if (content.classList.contains('active')) {
            content.style.opacity = '1';
            content.style.maxHeight = '200px';
            content.style.overflow = 'visible';
            content.style.marginTop = '20px';
            
        } else {
            content.style.marginTop = '0px';
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
            content.style.overflow = 'hidden';
        }
        
    }

    init() {
        this.btns.forEach(btn => {
            this.content = btn.closest('.module__info-show').nextElementSibling;
            this.content.style.display = 'block';
            this.content.style.transition = 'all 0.3s ease 0.3s';
            this.content.style.maxHeight = '0px';
            this.content.style.opacity = '0';
            this.content.style.marginTop = '0px';
            this.content.style.overflow = 'hidden';
        })
        this.bindBtn();
    }
}