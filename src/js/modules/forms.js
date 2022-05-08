export default class Forms {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.message = {
            loading: 'Loading...',
            succes: 'Thanks, we mail you soon',
            failure: 'Somthing goes wrong...'
        };
    }
    
    clearInputs() {
        this.forms.forEach(form => {
            this.inputs = form.querySelectorAll('input');
            this.inputs.forEach(input => {
                input.value = '';
            })
        })
    }

    async postData(url, data) {
        this.res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await this.res.text();
    }


    sendForm() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                this.overlay = document.createElement('div');
                this.overlay.classList.add('overlay');
                this.status = document.createElement('div');
                this.status.style.cssText = `
                    background-color: #4a5ea1;
                    color: #fff;
                    width: 250px;
                    height: 200px;
                    text-align: center;
                    padding-top: 80px;
                    border-radius: 15%;
                `;
                this.overlay.append(this.status);
                document.body.append(this.overlay);
                this.overlay.style.display = 'flex';
                this.status.textContent = this.message.loading;

                this.formData = new FormData(form);
                this.postData('../../assets/question.php', this.formData)
                    .then(res => {
                        this.status.textContent = this.message.succes;
                        console.log(res);
                    })
                    .catch(() => {
                        this.status.textContent = this.message.failure;
                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            this.overlay.remove();
                        }, 4000);
                    })
                        
                    
            });
        });
    }
}