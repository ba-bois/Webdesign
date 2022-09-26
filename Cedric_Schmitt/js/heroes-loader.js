const heroesElem = document.getElementById("heroes");
const template = document.getElementById("hero-template");

const heroObserver = new IntersectionObserver(
  function (entries) {
    if (entries[0]["isIntersecting"] === true) {
      // Add visible class to show events
      entries[0].target.classList.add("visible");
    }
  },
  { threshold: [0.01, 1, 0] }
);

for ([heroId, hero] of Object.entries(heroes)) {
  let t = template.content.cloneNode(true);

  for (const [key, value] of Object.entries(hero)) {
    const temp = t.querySelector(`[data-hero="${key}"]`);

    if (temp)
      if (key.includes("image")) {
        temp.src = value.source;
        temp.alt = value.alt_text;
      } else temp.innerHTML = value;
  }

  t.querySelector(
    `[data-hero="url"]`
  ).href = `character-sheet.html?hero=${heroId}`;

  heroesElem.appendChild(t);
  heroObserver.observe(document.querySelector("#heroes > div:last-child"));
}
