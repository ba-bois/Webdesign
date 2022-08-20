const bookCtx = document.getElementById("bookCanvas2D").getContext("2d");

const xCoordinateOnCircle = (radius, angle, x) => x + radius * Math.cos(angle);
const yCoordinateOnCircle = (radius, angle, x) => x + radius * Math.sin(angle);

bookCtx.lineWidth = 3.0;
bookCtx.beginPath();
//Upper circle
bookCtx.arc(75, 40, 30, Math.PI * 0.8, Math.PI * 0.2);

//down curves
const leftEndUpperCircleX = xCoordinateOnCircle(30, Math.PI * 0.8, 75);
const leftEndUpperCircleY = yCoordinateOnCircle(30, Math.PI * 0.8, 40);

const rightEndUpperCircleX = xCoordinateOnCircle(30, Math.PI * 0.2, 75);
const rightEndUpperCircleY = yCoordinateOnCircle(30, Math.PI * 0.2, 40);

bookCtx.moveTo(leftEndUpperCircleX, leftEndUpperCircleY);
bookCtx.arc(
    xCoordinateOnCircle(30, Math.PI * 0.8, leftEndUpperCircleX),
    yCoordinateOnCircle(30, Math.PI * 0.8, leftEndUpperCircleY),
    30,
    -Math.PI * 0.2,
    0
);
bookCtx.moveTo(rightEndUpperCircleX, rightEndUpperCircleY);
bookCtx.arc(
    xCoordinateOnCircle(30, Math.PI * 0.2, rightEndUpperCircleX),
    yCoordinateOnCircle(30, Math.PI * 0.2, rightEndUpperCircleY),
    30,
    -Math.PI * 0.8,
    Math.PI,
    true
);

const leftDownCoordinatesX = xCoordinateOnCircle(30, 0, xCoordinateOnCircle(30, Math.PI * 0.8, leftEndUpperCircleX));
const leftDownCoordinatesY = yCoordinateOnCircle(30, 0, yCoordinateOnCircle(30, Math.PI * 0.8, leftEndUpperCircleY));

const rightDownCoordinatesX = xCoordinateOnCircle(30, Math.PI, xCoordinateOnCircle(30, Math.PI * 0.2, rightEndUpperCircleX));
const rightDownCoordinatesY = yCoordinateOnCircle(30, Math.PI, yCoordinateOnCircle(30, Math.PI * 0.2, rightEndUpperCircleY));

//thread
bookCtx.moveTo(leftDownCoordinatesX, leftDownCoordinatesY);
bookCtx.lineTo(leftDownCoordinatesX, leftDownCoordinatesY + 28);
bookCtx.lineTo(rightDownCoordinatesX, rightDownCoordinatesY + 28);
bookCtx.lineTo(rightDownCoordinatesX, rightDownCoordinatesY);
bookCtx.lineTo(leftDownCoordinatesX, leftDownCoordinatesY);

for (let i = 7; i <= 21; i += 7) {
    bookCtx.moveTo(leftDownCoordinatesX + 5, leftDownCoordinatesY + i);
    bookCtx.lineTo(rightDownCoordinatesX - 5, leftDownCoordinatesY + i);
}

bookCtx.drawLine;
bookCtx.stroke();
