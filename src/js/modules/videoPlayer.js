export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.btns = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    playTrigger() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {

                if (!btn.firstElementChild.classList.contains('closed')) {
                    this.activeBtn = btn;
                    if (document.querySelector('iframe#frame')) {
                        this.overlay.style.display = 'flex';
                        this.player.playVideo();
                        if (btn.getAttribute('data-url') != this.path) {
                            this.path = btn.getAttribute('data-url');
                            this.player.loadVideoById({
                                'videoId': this.path
                            });
                        }
                    } else {
                        this.path = btn.getAttribute('data-url');
                        this.createPlayer(this.path);
                    }
                }

                
                
            });
        });

    }

    closePlayer() {
        this.close.addEventListener('click', () => {
            this.overlay.style.display = 'none';
            this.player.stopVideo();
        });        
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
            events: {
                'onReady': this.onPlayerReady,
                'onStateChange': this.onPlayerStateChange
            }
        });
        this.overlay.style.display = 'flex';
    }

    onPlayerStateChange(state) {
        try {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playVideoSvg = this.activeBtn.querySelector('svg').cloneNode(true);
            const playVideoBtn = blockedElem.querySelector('.play__circle');
            const playVideoText = blockedElem.querySelector('.play__text');
            if (state.data === 0) {
                blockedElem.style.filter = 'none';
                blockedElem.style.opacity = '1';
                playVideoBtn.querySelector('svg').replaceWith(playVideoSvg);
                playVideoBtn.classList.remove('closed');
                playVideoText.classList.remove('attention');
                playVideoText.textContent = 'play video';
            }
       } catch(e) {}
    }

    onPlayerReady(event) {
        event.target.playVideo();
    }

    init() {
        if (this.btns.length > 0) {
            const tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            this.playTrigger();
            this.closePlayer();
        }        
    }
}