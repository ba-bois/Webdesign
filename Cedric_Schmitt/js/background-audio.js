let audio = new Audio('assets/audio/the-shield.mp3');
audio.volume = 0.05;
audio.play();

let mute = document.getElementById("mute");

document.getElementById('mute').onclick = function () {
	toggleSound();
};

function toggleSound() {
	let fadePoint = audio.currentTime;

	if (audio.paused) {
		mute.classList.remove("muted");
		audio.play();
		let fadeAudio = setInterval(function () {
			if ((audio.currentTime >= fadePoint) && (audio.volume != 0.05)) {
				audio.volume += 0.001;
			}
			if (audio.volume > 0.0499) {
				clearInterval(fadeAudio);
			}
		}, 10);
	} else {
		mute.classList.add("muted");
		let fadeAudio = setInterval(function () {
			if ((audio.currentTime >= fadePoint) && (audio.volume != 0.0)) {
				audio.volume -= 0.001;
			}
			if (audio.volume < 0.001) {
				audio.volume = 0;
				clearInterval(fadeAudio);
				audio.pause();
			}
		}, 10);
	}
}