var boxSize = 40;
var r = 10;
var totalBox;

function setup() {
	createCanvas(windowWidth, windowHeight);
    totalBox = (windowWidth+windowHeight)/boxSize;
}

function draw() {
    background(0);
    noStroke();
    fill(255);
    var theta = frameCount/20;
    for(var y = 0; y < height; y += boxSize){
        for(var x = 0; x < width; x += boxSize){
            theta += PI/totalBox;
            if(x/boxSize % 2 === 0){
                eX = x + (r * cos(theta));
                eY = y + (r * sin(theta));
            }else{
                eX = x + (r * cos(-theta));
                eY = y + (r * sin(-theta));
            }
            ellipse(eX, eY, 2*r, 2*r);
        }
    }
}
