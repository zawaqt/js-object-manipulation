// Step 1: Import the data from data.js
const { sculptureList } = require('./data.js');

// Step 2: Use the .map() method to create a new array.
// This method iterates over each item in the original array and returns a new item,
// forming a new array with the results.
const sculptureListLengths = sculptureList.map(sculpture => {
  // Create a new empty object to store the lengths for the current sculpture
  const lengthsObject = {};

  // Step 3: Use a 'for...in' loop to iterate over the keys of the current sculpture object
  for (const key in sculpture) {
    // Check if the key is a direct property of the object (not from its prototype)
    if (Object.hasOwnProperty.call(sculpture, key)) {
      // Get the value associated with the key
      const value = sculpture[key];
      // Calculate the length of the string value and assign it to the new object
      lengthsObject[key] = value.length;
    }
  }

  // Return the newly created object with the lengths
  return lengthsObject;
});

// Step 4: After the loop, log the final sculptureListLengths array to the console.
// Using JSON.stringify with formatting makes the output neat and readable.
console.log(JSON.stringify(sculptureListLengths, null, 2));
