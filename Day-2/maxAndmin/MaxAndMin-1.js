function findMinAndMax(arr) {
    if (arr.length === 0){
        return { 
            min : undefined , 
            max : undefined 
        }
}

let min = arr[0]
let max = arr[0]

for(let i =1; i<arr.length; i++){
    if(arr[i] < min){
        min = arr[i]
    }
    if(arr[i] > max){
        max = arr[i]
    }
}
return { min,max };
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const result = findMinMax(numbers);
console.log("Minimum element:", result.min); // Output: 1
console.log("Maximum element:", result.max); // Output: 9