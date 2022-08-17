class MusicPlayer {
    #registeredIDs = [];
    #currentlyPlayingID = null;

    audioPlayerEl = document.getElementById("audioPlayerSrc");
    audioPlayerElChild = document.getElementById("audioPlayerSrc");

    #startPlayer(newSrc, newType) {
        this.audioPlayerElChild.src = newSrc;
        this.audioPlayerElChild.type = newType;
        this.audioPlayerEl.play();
    }

    #pausePlayer() {
        this.audioPlayerEl.currentTime = 0;
        this.audioPlayerEl.pause();
    }

    #play(el, audioSrc, audioType) {
        this.#registeredIDs.forEach(registeredId => {
            if (registeredId !== el.id) {
                document.getElementById(registeredId).src = "../Assets/IMGs/icon_play.png";
            }
        });

        el.src = "../Assets/IMGs/icon_pause.png";
        this.#pausePlayer();
        this.#startPlayer(audioSrc, audioType);
    }

    #pause(el) {
        el.src = "../Assets/IMGs/icon_play.png";
        this.#pausePlayer();
    }

    registerPlayer(id, audioSrc, audioType) {
        const newPlayerEl = document.getElementById(id);
        this.#registeredIDs.push(id);

        newPlayerEl.addEventListener("click", () => {
            if (this.#currentlyPlayingID !== id) {
                this.#currentlyPlayingID = id;
                this.#play(newPlayerEl, audioSrc, audioType);
            } else {
                this.#currentlyPlayingID = null;
                this.#pause(newPlayerEl);
            }
        });
    }
}

const musicPlayer = new MusicPlayer();

musicPlayer.registerPlayer("webdesign", "../Assets/Audio/goldn-116392.mp3", "audio/mpeg");

musicPlayer.registerPlayer("banane", "../Assets/Audio/cinematic-time-lapse-115672.mp4", "audio/mp4");

musicPlayer.registerPlayer("apfel", "../Assets/Audio/milk-shake-116330.wav", "audio/x-wav");

musicPlayer.registerPlayer("kiwi", "../Assets/Audio/stomping-rock-four-shots-111444.mp3", "audio/mpeg");
