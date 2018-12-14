var lines = [];
var lineHeight = 40;
var lineWidth = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);
    background(0, 30, 50);
}

function draw() {
    for(var y = 0; y < height; y+= lineHeight){
        for(var x = 0; x < width; x += lineWidth){
            strokeWeight(lineWidth-4);
            stroke(225);
            var y1 = y + floor(random(0, lineHeight/2));
            var y2 = y + floor(random(lineHeight/2, lineHeight));
            line(x, y1, x, y2);
        }
    }
    noLoop();

}
