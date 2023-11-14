// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  if (numbers.length !== 10) {
      return "Invalid input: Array length should be 10.";
  }

  // Extracting components of the phone number
  const firstPart = numbers.slice(0, 3).join('');
  const secondPart = numbers.slice(3, 6).join('');
  const thirdPart = numbers.slice(6).join('');

  // Format into a phone number string
  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}

// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
//         assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");

module.exports = createPhoneNumber; // Export the function for testing
