function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Test cases
console.assert(add(2, 3) === 5, "Addition test failed");
console.assert(add(0, 0) === 0, "Zero test failed");
console.assert(subtract(10, 4) === 6, "Subtraction test failed");

console.log("Testing completed!");
