var j = 0;

function setup() {
	createCanvas(400, 400);
	angleMode(DEGREES);
	stroke(20);
	strokeWeight(1);
	fill(255, 0, 200, 130);
}

function draw() {
	background(200);
	wavedraw(40, 65 * 1, 360, 0);
	wavedraw(40, 65 * 2, 360, 90);
	wavedraw(40, 65 * 3, 360, 0);
	wavedraw(40, 65 * 4, 360, 90);
	wavedraw(40, 65 * 5, 360, 0);
	j -= 3;
}

function wavedraw(startY, startX, endY, phase) {
	for (var i = startY; i < endY; i += 8) {
		let r = (cos(i * 1.3 + j + phase) * width) / 10;

		ellipse(startX, i, r, r * 0.6);
	}
}
