var boxSize = 40;
var theta = 1;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(30);
    stroke(255)

    var theta = 0.1;
    for(var y=0; y < height; y += boxSize){
        for(var x=0; x < width; x += boxSize){
            [x1, y1, x2, y2] = [cos(theta), sin(theta),
                cos(theta + PI), sin(theta + PI)].map(e => e * boxSize/2 + boxSize/2);
            line(x1+x, y1+y, x2+x, y2+y)
            theta += 8
        }
    }
}
