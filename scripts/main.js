const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width / 2; // Initial x position at the center of the canvas
let y = canvas.height / 2; // Initial y position at the center of the canvas
let vx = 0;
let vy = 0;

function animate() {
  // Clear the canvas before drawing the square at its new position
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update the position of the square
  x += vx;
  y += vy;
  
  // Draw the square at its new position
  ctx.fillRect(x, y, 10, 10);
  
  // Request the next animation frame to continue the animation loop
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();

// Event listener to handle key presses
addEventListener("keydown", function(e) {
  // Update velocity based on the pressed key
  if (e.code === "KeyW") {
    vy = -5; // Move up
  } else if (e.code === "KeyS") {
    vy = 5; // Move down
  } else if (e.code === "KeyA") {
    vx = -5; // Move left
  } else if (e.code === "KeyD") {
    vx = 5; // Move right
  }
});

// Event listener to handle key releases
addEventListener("keyup", function(e) {
  // Reset velocity when the key is released
  if (e.code === "KeyW" || e.code === "KeyS") {
    vy = 0;
  } else if (e.code === "KeyA" || e.code === "KeyD") {
    vx = 0;
  }
});
