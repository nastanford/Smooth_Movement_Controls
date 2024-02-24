
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