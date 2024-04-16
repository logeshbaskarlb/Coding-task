

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const target = 9;
const index = linearSearch(array, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
