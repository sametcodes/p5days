var pointSize = 20;
var d = 400;
var points;

function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0);
    points = [...Array(pointSize).keys()].map(k => ({
        r: floor(random(0, d)),
        theta: random(0, TWO_PI)
    }))
}

function draw() {
    translate(width/2, height/2);
    noStroke();

    if(frameCount % 75 === 0){
        background(0);
        points = [...Array(pointSize).keys()].map(k => ({
            r: floor(random(0, d)),
            theta: random(0, TWO_PI)
        }))
    }

    for(var k in [...Array(30).keys()]){
        for(var i in points){
            var {r, theta} = points[i];
            fill(map(r, 0, d, 50, 255));
            ellipse(r * cos(theta), r * sin(theta), map(r, 0, d, 0.1, 3));
            points[i].theta += 0.005;
        }
    }
}
