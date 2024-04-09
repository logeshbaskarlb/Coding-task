function findMinAndMax(arr) {
    if (arr.length === 0) {
      return {
        min: undefined,
        max: undefined,
      };
    }
  
  const { min , max } = arr.reduce((acc,curr) => {
    return {
        min : Math.min(acc.min,curr),
        max : Math.max(acc.max,curr)
    }
  },{min:Infinity,max:-Infinity});
  
    return {min , max}
  }
  
  // Example usage:
  const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
  const result = findMinMax(numbers);
  console.log("Minimum element:", result.min); // Output: 1
  console.log("Maximum element:", result.max); // Output: 9