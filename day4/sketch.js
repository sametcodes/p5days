var dots = [];
var pointSize = 50;

function setup() {
	createCanvas(windowWidth, windowHeight);
    dots = [...Array(pointSize)].map((id) => ({
        id,
        x: floor(random(0, width)),
        y: floor(random(0, height)),
        r: floor(random(10, 25)),
        theta: random(0, 5),
        direction: random([-1, 1]),
    }))
}

function draw() {
    scale(0.5);
    translate(width/2, height/2);
    background(30);

    for(var dot of dots){
        let x = dot.r*10 * cos(dot.theta) + dot.x; 
        let y = dot.r*10 * sin(dot.theta) + dot.y;

        fill(255);
        noStroke();
        ellipse(x, y, dot.r);
        dot.theta += PI/100 * dot.direction;
        
        for(var dot2 of dots){
            let x1 = dot.r*10 * cos(dot.theta) + dot.x;
            let y1 = dot.r*10 * sin(dot.theta) + dot.y;
            let x2 = dot2.r*10 * cos(dot2.theta) + dot2.x;
            let y2 = dot2.r*10 * sin(dot2.theta) + dot2.y;
            if(dist(x1, y1, x2, y2) < 200){
                stroke(0, 150, 150)
                strokeWeight(3)
                line(x1, y1, x2, y2)
            }
        }
    } 
}
