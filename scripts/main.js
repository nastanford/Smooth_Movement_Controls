const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width / 2; // Initial x position at the center of the canvas
let y = canvas.height / 2; // Initial y position at the center of the canvas
let vx = 0;
let vy = 0;

const acceleration = 0.2; // Rate of acceleration
const maxSpeed = 5; // Maximum speed

const squareSize = 50; // Size of the square

function animate() {
  // Clear the canvas before drawing the square at its new position
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update the position of the square
  x += vx;
  y += vy;

  // Boundary checks to keep the square within the canvas
  if (x < 0) {
    x = 0;
  } else if (x > canvas.width - squareSize) {
    x = canvas.width - squareSize;
  }
  if (y < 0) {
    y = 0;
  } else if (y > canvas.height - squareSize) {
    y = canvas.height - squareSize;
  }
  
  // Draw the square at its new position
  ctx.fillRect(x, y, squareSize, squareSize);
  
  // Request the next animation frame to continue the animation loop
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
