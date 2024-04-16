

const binarySearch = (arr, search) =>{
    let start = 0;
    let end = arr.length - 1
    
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === search){
            return mid
        } else if (arr[mid] > search){
            end = mid - 1
        }else if(arr[mid] < search){
            start = mid + 1
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
