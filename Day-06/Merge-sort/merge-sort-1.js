

const mergeSort =  arr =>{
    const merge = (left,right) =>{
        if(left.length ===0) return right;
        if(right.length ===0) return left;

        return left[0] <= right[0] 
                ? [left[0],...merge(left.slice(1),right) ]  
                : [right[0],...merge(left,right.slice(1)) ]  
    }

    const n = arr.length;
    if(n <= 1) return arr

    const mid = Math.floor(n/2);
    const leftHalf = mergeSort(arr.slice(0,mid))
    const rightHalf = mergeSort(arr.slice(mid))
}

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(array);
console.log("Sorted Array using Functional Merge Sort:", sortedArray);