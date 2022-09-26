var canvas = document.getElementById("can01");
var ctx = canvas.getContext("2d");

ctx.fillStyle="#00387B";
ctx.fillRect(0, 0, 300, 200);


ctx.fillStyle="#000";

//Zeile 1 und 20
ctx.fillRect(110, 0, 80, 10);
ctx.fillRect(80, 190, 140, 10);

//Spalte 3
ctx.fillRect(20, 80, 10, 80);
//Spalte4
ctx.fillRect(30, 70, 10, 10);
ctx.fillRect(30, 110, 10, 20);
ctx.fillRect(30, 140, 10, 10);
ctx.fillRect(30, 160, 10, 10);
//Spalte 5
ctx.fillRect(40, 70, 10, 10);
ctx.fillRect(40, 100, 10, 10);
ctx.fillRect(40, 120, 10, 10);
ctx.fillRect(40, 140, 10, 10);
ctx.fillRect(40, 160, 10, 30);
//Spalte 6
ctx.fillRect(50, 60, 10, 10);
ctx.fillRect(50, 100, 10, 10);
ctx.fillRect(50, 120, 10, 40);
ctx.fillRect(50, 180, 10, 10);
//Spalte 7
ctx.fillRect(60, 50, 10, 140);
//Spalte 8
ctx.fillRect(70, 40, 10, 10);
ctx.fillRect(70, 150, 10, 10);
ctx.fillRect(70, 180, 10, 10);
//Spalte 9
ctx.fillRect(80, 20, 10, 20);
ctx.fillRect(80, 70, 10, 130);
//Spalte 10
ctx.fillRect(90, 10, 10, 10);
ctx.fillRect(90, 70, 10, 20);
ctx.fillRect(90, 100, 10, 10);
ctx.fillRect(90, 140, 10, 10);
//Spalte 11
ctx.fillRect(100, 10, 10, 30);
ctx.fillRect(100, 70, 10, 20);
ctx.fillRect(100, 110, 10, 10);
ctx.fillRect(100, 150, 10, 50);
//Spalte 12
ctx.fillRect(110, 80, 10, 10);
ctx.fillRect(110, 110, 10, 10);
//Spalte 13
ctx.fillRect(120, 30, 10, 10);
ctx.fillRect(120, 80, 10, 20);
ctx.fillRect(120, 110, 10, 10);
ctx.fillRect(120, 140, 10, 40);
//Spalte 14
ctx.fillRect(130, 30, 10, 10);
ctx.fillRect(130, 90, 10, 20);
ctx.fillRect(130, 130, 10, 10);
ctx.fillRect(130, 160, 10, 10);
//Spalte 15
ctx.fillRect(140, 30, 10, 10);
ctx.fillRect(140, 90, 10, 10);
ctx.fillRect(140, 120, 10, 40);
//Spalte 16
ctx.fillRect(150, 30, 10, 10);
ctx.fillRect(150, 90, 10, 10);
ctx.fillRect(150, 120, 10, 40);
//Spalte 17
ctx.fillRect(160, 30, 10, 10);
ctx.fillRect(160, 90, 10, 20);
ctx.fillRect(160, 130, 10, 10);
ctx.fillRect(160, 160, 10, 10);
//Spalte 18
ctx.fillRect(170, 30, 10, 10);
ctx.fillRect(170, 80, 10, 20);
ctx.fillRect(170, 110, 10, 10);
ctx.fillRect(170, 140, 10, 40);
//Spalte 19
ctx.fillRect(180, 80, 10, 10);
ctx.fillRect(180, 110, 10, 10);
//Spalte 20
ctx.fillRect(190, 10, 10, 30);
ctx.fillRect(190, 70, 10, 20);
ctx.fillRect(190, 110, 10, 10);
ctx.fillRect(190, 150, 10, 50);
//Spalte 21
ctx.fillRect(200, 10, 10, 10);
ctx.fillRect(200, 70, 10, 20);
ctx.fillRect(200, 100, 10, 10);
ctx.fillRect(200, 140, 10, 10);
//Spalte 22
ctx.fillRect(210, 20, 10, 20);
ctx.fillRect(210, 70, 10, 130);
//Spalte 23
ctx.fillRect(220, 40, 10, 10);
ctx.fillRect(220, 150, 10, 10);
ctx.fillRect(220, 180, 10, 10);
//Spalte 24
ctx.fillRect(230, 50, 10, 140);
//Spalte 25
ctx.fillRect(240, 60, 10, 10);
ctx.fillRect(240, 100, 10, 10);
ctx.fillRect(240, 120, 10, 40);
ctx.fillRect(240, 180, 10, 10);
//Spalte 26
ctx.fillRect(250, 70, 10, 10);
ctx.fillRect(250, 100, 10, 10);
ctx.fillRect(250, 120, 10, 10);
ctx.fillRect(250, 140, 10, 10);
ctx.fillRect(250, 160, 10, 30);
//Spalte 27
ctx.fillRect(260, 70, 10, 10);
ctx.fillRect(260, 110, 10, 20);
ctx.fillRect(260, 140, 10, 10);
ctx.fillRect(260, 160, 10, 10);
//Spalte 28
ctx.fillRect(270, 80, 10, 80);

const delay = ms => new Promise(res => setTimeout(res, ms));

const blink = async (event) => {
    ctx.fillStyle="#c61a09";
    ctx.fillRect(90, 90, 30, 10);
    ctx.fillRect(120, 100, 10, 10);
    
    ctx.fillRect(180, 90, 30, 10);
    ctx.fillRect(170, 100, 10, 10);

    ctx.fillStyle="#F00";
    ctx.fillRect(180, 100, 20, 10);
    ctx.fillRect(100, 100, 20, 10);
}

const shut = async (event) => {
    ctx.fillStyle="#00387B";
    ctx.fillRect(90, 90, 30, 10);
    ctx.fillRect(120, 100, 10, 10);
    
    ctx.fillRect(180, 90, 30, 10);
    ctx.fillRect(170, 100, 10, 10);

    ctx.fillRect(180, 100, 20, 10);
    ctx.fillRect(100, 100, 20, 10);
}

canvas.addEventListener("mouseover", blink);
canvas.addEventListener("mouseout", shut);