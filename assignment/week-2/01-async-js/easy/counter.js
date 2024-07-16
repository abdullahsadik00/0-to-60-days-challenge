// Initialize counter
let counter = 0;

// Function to increment the counter
function incrementCounter() {
  counter++;
  console.log(counter);
}

// Set interval to increment counter every second (1000 milliseconds)
setInterval(incrementCounter, 1000);
