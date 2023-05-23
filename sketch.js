
let circle;
let acceleration;
let velocity;
let position;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Inicializar el círculo en el centro de la pantalla
  position = createVector(width / 2, height / 2);
  
  // Inicializar la velocidad y la aceleración en cero
  velocity = createVector(0, 0);
  acceleration = createVector(0, 0);
  
  // Solicitar el acceso al acelerómetro del dispositivo móvil
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.addEventListener('devicemotion', handleMotionEvent);
        }
      })
      .catch(console.error);
  } else {
    console.log('No se puede acceder al acelerómetro del dispositivo.');
  }
}

function draw() {
  background(220);
  
  // Actualizar la posición del círculo en función de la velocidad y la aceleración
  velocity.add(acceleration);
  position.add(velocity);
  
  // Verificar los límites de la pantalla y hacer que el círculo rebote
  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
  }
  
  // Dibujar el círculo en su posición actual
  circle = ellipse(position.x, position.y, 50, 50);
}

// Función para manejar los eventos de aceleración
function handleMotionEvent(event) {
  // Obtener los valores de aceleración en los ejes x e y
  let accelX = event.accelerationIncludingGravity.x;
  let accelY = event.accelerationIncludingGravity.y;
  
  // Actualizar la aceleración del círculo en función de los valores del acelerómetro
  acceleration.x = accelX;
  acceleration.y = accelY;
}
