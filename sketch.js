let circle;
let gravityX = 0;
let gravityY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circle = new Circle(width / 2, height / 2, 50);
  
  if (typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function') {
    DeviceMotionEvent.requestPermission().then(permissionState => {
      if (permissionState === 'granted') {
        window.addEventListener('devicemotion', handleMotion);
      }
    }).catch(console.error);
  } else {
    console.log('DeviceMotionEvent is not supported');
  }
}

function draw() {
  background(220);
  
  circle.applyGravity(gravityX, gravityY);
  circle.update();
  circle.display();
  
  // Rebote en los bordes de la pantalla
  if (circle.position.x + circle.radius > width || circle.position.x - circle.radius < 0) {
    circle.velocity.x *= -1;
  }
  if (circle.position.y + circle.radius > height || circle.position.y - circle.radius < 0) {
    circle.velocity.y *= -1;
  }
}

function handleMotion(event) {
  gravityX = event.accelerationIncludingGravity.x;
  gravityY = event.accelerationIncludingGravity.y;
}

class Circle {
  constructor(x, y, radius) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.radius = radius;
  }
  
  applyGravity(gravityX, gravityY) {
    this.acceleration.x = gravityX;
    this.acceleration.y = gravityY;
  }
  
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.velocity.mult(0.98); // Damping para reducir la velocidad gradualmente
    this.acceleration.mult(0);
  }
  
  display() {
    noStroke();
    fill(0, 150, 255);
    ellipse(this.position.x, this.position.y, this.radius * 2);
  }
}
