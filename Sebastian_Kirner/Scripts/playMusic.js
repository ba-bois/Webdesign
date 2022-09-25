class MusicPlayer {
    #registeredIDs = [];
    #currentlyPlayingID = null;

    audioPlayerEl = document.getElementById("audioPlayerSrc");

    constructor() {
        this.audioPlayerEl.addEventListener("ended", () => {
            this.#pause();
        });
    }

    #startPlayer(childArray) {
        childArray.forEach(child => {
            let newSourceEl = document.createElement("source");
            newSourceEl.setAttribute("src", child.src);
            newSourceEl.setAttribute("type", child.type);

            this.audioPlayerEl.appendChild(newSourceEl);
        });
        this.audioPlayerEl.load();
        this.audioPlayerEl.play();
    }

    #pausePlayer() {
        this.audioPlayerEl.currentTime = 0;
        this.audioPlayerEl.pause();
        this.audioPlayerEl.innerHTML = "";
    }

    #play(el, childArray) {
        this.#pause();
        el.src = "../Assets/IMGs/icon_pause.png";
        this.#startPlayer(childArray);
    }

    #pause(el) {
        this.#registeredIDs.forEach(registeredId => {
            document.getElementById(registeredId).src = "../Assets/IMGs/icon_play.png";
        });
        this.#pausePlayer();
    }

    registerPlayer(id, childArray) {
        const newPlayerEl = document.getElementById(id);
        this.#registeredIDs.push(id);

        newPlayerEl.addEventListener("click", () => {
            if (this.#currentlyPlayingID !== id) {
                this.#currentlyPlayingID = id;
                this.#play(newPlayerEl, childArray);
            } else {
                this.#currentlyPlayingID = null;
                this.#pause(newPlayerEl);
            }
        });
    }
}

const musicPlayer = new MusicPlayer();

musicPlayer.registerPlayer("webdesign", [{ src: "../Assets/Audio/goldn-116392.mp3", type: "audio/mpeg" }]);

musicPlayer.registerPlayer("banane", [
    { src: "../Assets/Audio/cinematic-time-lapse-115672.mp4", type: "audio/mp4" },
    { src: "../Assets/Audio/cinematic-time-lapse-115672.mp3", type: "audio/mp3" },
]);

musicPlayer.registerPlayer("apfel", [
    { src: "../Assets/Audio/milk-shake-116330.wav", type: "audio/x-wav" },
    { src: "../Assets/Audio/milk-shake-116330.mp3", type: "audio/mp3" },
]);

musicPlayer.registerPlayer("kiwi", [
    { src: "../Assets/Audio/selbst_erzeugt.m4a", type: "audio/mp4" },
    { src: "../Assets/Audio/selbst_erzeugt.mp3", type: "audio/mp3" },
    { src: "../Assets/Audio/selbst_erzeugt.wav", type: "audio/x-wav" },
]);
