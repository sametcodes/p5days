var points = [];
var pointSize = 250;

function setup() {
	createCanvas(windowWidth, windowHeight);
    points = [...Array(pointSize).keys()].map(() => ({
        x: random(0, windowWidth),
        y: random(0, windowWidth),
        r: random(20, 50),
        v: random(0, 2),
        color: color(random(1, 255), random(1, 255), random(1, 255))
    }))
    background('#151515')
}

function draw() {
    background('rgba(10, 10, 10, 0.05)')
    noStroke();
    points.forEach(({x, y, r, v, color}, i) => {
        fill(color);
        ellipse((x+v)%width, (y+v)%height, r);
        points[i].v += r/10;
    })
}


// il es punaise mais ça ne fait rien :lollipop:
