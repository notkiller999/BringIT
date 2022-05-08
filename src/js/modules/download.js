export default class Download {
    constructor(btns) {
        this.btns = document.querySelectorAll(btns);
        this.path = 'assets/img/mainbg.jpg';
    }

    downloadItem(path) {
        const link = document.createElement('a');       
        link.setAttribute('href', path);
        link.setAttribute('download', 'some_pic');
        link.classList.add('my_link');
        link.style.display = 'none';
        document.body.appendChild(link);
        document.querySelector('.my_link').click();
        link.remove();
    }

    bindBtns() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.downloadItem(this.path)
            })
        })
    }

    init() {
        this.bindBtns();
    }
}