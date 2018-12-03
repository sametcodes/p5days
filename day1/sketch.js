var c = 0;
var m1 = 2, m2 = 8;

function setup() {
	createCanvas(windowWidth, windowHeight);
    background(10)
}

function draw() {
    var rand = parseInt(random(m1, m2));
    c += rand;
    var stroke_color = map(rand, m1, m2, 0, 255)
    strokeWeight(rand % 4)
    stroke(stroke_color)

    noFill();
    bezier(8+c, 0, 1+c, 1+c, 8+c, 8+c, 0, 8+c);
}
