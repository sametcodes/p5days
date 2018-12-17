var maxWidth = 50, minWidth = 20;
var circles = [];
var acc = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
    for(var y = 0; y < height; y += maxWidth){
        for(var x = 0; x < width; x += maxWidth){
            circles = [...circles,
                {x, y, r: floor(random(minWidth, maxWidth, 1)), d: random([1, -1]), acc: random(0.5, 2),
                    color: random([color(243, 54, 23), color(3, 67, 154), color(34, 234, 98)])
                }]
            setTimeout(() => {}, 5);
        }
    }
}

function draw() {
    background(10);
    noStroke();
    for(var i = 0; i < circles.length; i++){
        fill(circles[i].color);
        ellipse(circles[i].x, circles[i].y, circles[i].r)
        if(circles[i].r >= maxWidth){
            circles[i].d = -1;
        }
        if(circles[i].r <= minWidth){
            circles[i].d = 1;
        }
        circles[i].r += circles[i].acc * circles[i].d;
    }
}
