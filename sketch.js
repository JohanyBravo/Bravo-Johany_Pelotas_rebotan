let ball;
let gravity = 0.2;
let friction = 2;

function setup() {
	createCanvas(400, 400);
	ball = new Ball(width / 2, height / 2, 30);
}

function draw() {
	background(220);
	
	ball.update();
	ball.display();
	
	
}

class Ball {
	constructor(x, y, radius) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.xSpeed = 0;
		this.ySpeed = 0;
	}
	
	update() {
		this.ySpeed += gravity;
		this.xSpeed *= friction;
		this.y += this.ySpeed;
		this.x += this.xSpeed;
		
		// Bounce when the ball hits the ground
		if (this.y > height - this.radius / 2) {
			this.y = height - this.radius / 2;
			this.ySpeed *= -1; // Reverse vertical speed
		}
		
		// Bounce when the ball hits the sides
		if (this.x > width - this.radius / 2 || this.x < this.radius / 2) {
			this.xSpeed *= -1; // Reverse horizontal speed
		}
	}
	
	display() {
		
		noStroke();
		fill(25, 70, 50);
		ellipse(width/4, this.y, this.radius * 3
		);
		
		
		fill(28, 100, 50);
		ellipse(width/1.5, this.y, this.radius* 3)
		

		
	




	}
}
