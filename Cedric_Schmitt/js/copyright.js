const canvas = document.getElementById("copyright");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "white";

const width = ctx.canvas.width;
const height = ctx.canvas.height;

const circle = { radius: 8 };
const c = { radius: 4 };

const draw = function (rotation) {
  // Clear it all
  ctx.clearRect(0, 0, width, height);

  // Rotation happens from the corner, so we need to shift
  // everything to the edge, then rotate and then move it all back
  ctx.translate(width / 2, height / 2);
  ctx.rotate(rotation);
  ctx.translate(-width / 2, -height / 2);

  // Draw outer Path (the circle)
  ctx.beginPath();
  ctx.arc(
    circle.radius + (width - circle.radius * 2) / 2,
    circle.radius + (height - circle.radius * 2) / 2,
    circle.radius,
    0,
    Math.PI * 2
  );
  ctx.stroke();

  // Draw the "C"
  ctx.beginPath();
  ctx.arc(
    c.radius + (width - c.radius * 2) / 2,
    c.radius + (height - c.radius * 2) / 2,
    c.radius,
    Math.PI * 0.25,
    Math.PI * 1.75
  );
  ctx.stroke();
};

let isSpinning = false;
let rotationStep = 2;
let lastTime = 0;
let currTime = 0;
let reqId = null;

function animateSpin() {
  currTime = new Date().getTime();
  delta = (currTime - lastTime) / 1000;

  rotation = Math.PI * rotationStep * delta;

  draw(rotation);

  lastTime = currTime;

  if (isSpinning) reqId = requestAnimationFrame(animateSpin);
  else {
    cancelAnimationFrame(reqId);
    reqId = null;
  }
}

function spin() {
  isSpinning = !isSpinning;

  if (isSpinning) {
    currTime = new Date().getTime();
    lastTime = currTime;
    // Save copyright with normal rotation
    animateSpin();
  }
}

canvas.onclick = spin;
draw(0);
