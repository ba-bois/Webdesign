let canvas = document.querySelector("#triangle1");
let context = canvas.getContext("2d");

function drawTriangle() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, canvas.width, canvas.height);

  let height = 50 * Math.cos(Math.PI / 6);

  context.beginPath();
  context.moveTo(15, 100);
  context.lineTo(100, 140);
  context.lineTo(140, 60 - height);
  context.closePath();

  // the outline
  context.lineWidth = 5;
  context.strokeStyle = '#666666';
  context.stroke();

  // the fill color
  context.fillStyle = "#FF8300";
  context.fill();
}
drawTriangle();