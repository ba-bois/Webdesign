var canvas = document.getElementById("can01");
var ctx = canvas.getContext("2d");

ctx.fillStyle="#F00";


ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(250, 150);
ctx.stroke();
ctx.fill();