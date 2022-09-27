var can, ctx, step, steps = 0,
delay = 20;

function init() {
    can = document.getElementById("animierter-text");
    can.width = window.innerWidth * 0.6;
    ctx = can.getContext("2d");
    ctx.fillStyle = "#EAD017";
    ctx.font = "20pt Verdana";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    step = can.width + 150;
    steps = can.width + 150;
    RunTextRightToLeft();
}

function RunTextRightToLeft() {
    step--;
    ctx.clearRect(0, 0, can.width, can.height);
    ctx.save();
    ctx.translate(step, can.height / 2);
    ctx.fillText("!!! Wir suchen dringend Verstärkung !!!", 0, 0);
    ctx.restore();
    if (step == -150)
        step = can.width + 150;
    if (step <= steps)
        var t = setTimeout('RunTextRightToLeft()', delay);
}