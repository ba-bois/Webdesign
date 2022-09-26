const params = new URLSearchParams(window.location.search);
const hero = heroes[params.get("hero")];

console.log(hero);

document.title = hero.character_name;

for (const [key, value] of Object.entries(hero)) {
  const temp = document.querySelectorAll(`[data-hero="${key}"]`);

  if (temp.length > 0)
    temp.forEach(t => {
      if (key.includes("image")) {
        t.src = value.source;
        t.alt = value.alt_text;
      } else t.innerHTML = value;
    });
}

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
firstSectionObserver.observe(document.getElementById("navbar-toggle"));

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let i = 1;
  for (const [key, value] of Object.entries(hero)) {
    console.log(`${key}: ${value}`);
    if (key.includes("image") === false)
      doc.text(`${key}: ${value}`, 10, 10 * i++);
  }
  doc.save(`${hero.character_name}.pdf`);
}