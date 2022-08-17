class MusicPlayer {
    #registeredIDs = [];
    #currentlyPlayingID = null;

    audioPlayerEl = document.getElementById("audioPlayerSrc");
    audioPlayerElChild = document.getElementById("audioPlayerSrc");

    audioPlayer = new Audio("../Assets/Audio/goldn-116392.mp3");

    #startPlayer(newSrc, newType) {
        this.audioPlayer.src = newSrc;
        this.audioPlayer.type = newType;
        this.audioPlayer.play();
    }

    #pausePlayer() {
        this.audioPlayer.currentTime = 0;
        this.audioPlayer.pause();
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

musicPlayer.registerPlayer(
    "banane",
    "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/11/file_example_MP3_2MG.mp3",
    "audio/mpeg"
);

musicPlayer.registerPlayer(
    "apfel",
    "https://file-examples.com/storage/fe2ef7477862f581f9ce264/2017/11/file_example_MP3_2MG.mp3",
    "audio/mpeg"
);
