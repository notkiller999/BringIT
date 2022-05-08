export default class CheckInput {
    constructor(selector) {
    this.inputs = document.querySelectorAll(selector);
    }

    init() {
        this.inputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key.match(/[^a-z 0-9]/ig)) {
                    e.preventDefault();
                }
            });

            input.addEventListener('change', () => {
                if (input.value.match(/[^a-z 0-9 @ \.]/ig)) {
                    input.value = '';
                }
            })
        })
    }
    
}