function findMinAndMax(arr) {
  if (arr.length === 0) {
    return {
      min: undefined,
      max: undefined,
    };
  }

  const min = Math.min(...arr)
  const max = Math.max(...arr)

  return {min , max}
}

// Example usage:
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const result = findMinMax(numbers);
console.log("Minimum element:", result.min); // Output: 1
console.log("Maximum element:", result.max); // Output: 9