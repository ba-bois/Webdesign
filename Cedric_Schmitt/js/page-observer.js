const navbar = document.getElementById("navbar");

const firstSectionObserver = new IntersectionObserver(
  function (entries) {
    if (entries[0]["isIntersecting"] === true) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
    }
  },
  { threshold: [0.01, 1, 0] }
);

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting === true) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    })
  },
  { threshold: [0.01, 1, 0] }
);

// Add observer
firstSectionObserver.observe(document.getElementById("navbar-toggle"));

document.querySelectorAll('.hero-box').forEach(elem => observer.observe(elem));
observer.observe(document.querySelector("footer"));

// Mute Button
const muteButton = document.getElementById("mute");

muteButton.onclick = function (e) {
  if (muteButton.classList.contains("muted"))
    muteButton.classList.remove("muted");
  else muteButton.classList.add("muted");
};
