export default class ShowCards {
    constructor(parent) {
        try {
            this.parent = document.querySelector(parent);
            this.cards = this.parent.children;
            this.cardIndex = 1;
            this.plusCard = this.cards[this.cards.length - 1];
       } catch(e){}
    }

    showCards() {
        this.btn = this.plusCard.querySelector('.plus');
        this.btn.addEventListener('click', () => {
            if (this.cardIndex < this.cards.length - 2) {
                this.cards[this.cardIndex].style.display = 'flex';
                this.cards[this.cardIndex].classList.add('animated', 'fadeIn');
                this.cardIndex++;
            } else {
                this.cards[this.cardIndex].style.display = 'flex';
                this.cards[this.cardIndex].classList.add('animated', 'fadeIn');
                this.plusCard.style.animationDuration = '0.1s'
                this.plusCard.classList.add('animated', 'fadeOutDown');
                setTimeout(() => {
                    this.plusCard.remove();
                }, 100);
                    
            }
        })
    }

    hideCards() {
        this.cards.forEach((card, i, arr) => {
            if (i != 0 && i != arr.length - 1) {
                card.style.display = 'none';
            }
        });
    }

    init() {
        try {
            this.hideCards();
            this.showCards();
       } catch(e){}
    }
}