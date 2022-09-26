var canves = document.getElementById('canvas');
canves.width = window.innerWidth;
canves.height = window.innerHeight;
console.log(canves);

var ctx = canvas.getContext('2d');

bewegen()


var x = 200,
    y = 200,
    dx = 2,
    dy = 2,
    radius = 30;

function bewegen(){
    window.requestAnimationFrame(bewegen);

    ctx.clearRect(0,0,innerWidth, innerHeight)
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI * 2, false);
    ctx.strokeStyle = "Red";
    ctx.stroke();

    x += 15
    console.log('TEST')
}
