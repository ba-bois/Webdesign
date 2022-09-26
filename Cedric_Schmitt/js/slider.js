const previousBtn = document.querySelector(`[data-slider-control="previous"]`);
const nextBtn = document.querySelector(`[data-slider-control="next"]`);

const previousImg = document.querySelector(`[data-slider="previous"]`);
const currentImg = document.querySelector(
  `[data-slider="current"] > div > img`
);
const nextImg = document.querySelector(`[data-slider="next"]`);

const sliderTitle = document.querySelector(`[data-slider="title"]`);
const sliderDescription = document.querySelector(`[data-slider="description"]`);

let currentIndex = 1;

const images = [
  {
    path: "desert.webp",
    title: "Desert of Lost Memories",
    description: "This is a desert",
  },
  {
    path: "Felderwin_EGtW.webp",
    title: "Felderwin Village",
    description: "Oh wow. A village!",
  },
  {
    path: "islands_in_forest.webp",
    title: "Hidden Village",
    description: "Nice cliffs.",
  },
];

// Interaction
previousBtn.onclick = function (e) {
  e.preventDefault();

  currentIndex--;
  if (currentIndex === -1) currentIndex = images.length - 1;

  setImage(currentIndex);
};

nextBtn.onclick = function (e) {
  e.preventDefault();

  currentIndex++;
  if (currentIndex === images.length) currentIndex = 0;

  setImage(currentIndex);
};

function setImage(index) {
  const prevIndex = index == 0 ? images.length - 1 : index - 1;
  const nextIndex = index == images.length - 1 ? 0 : index + 1;

  previousImg.style.backgroundImage = `url("assets/locations/${images[prevIndex].path}")`;
  nextImg.style.backgroundImage = `url("assets/locations/${images[nextIndex].path}")`;

  currentImg.src = `assets/locations/${images[index].path}`;
  currentImg.alt = images[index].alt_text;

  sliderTitle.innerHTML = images[index].title;
  sliderDescription.innerHTML = images[index].description;
}

setImage(currentIndex);
