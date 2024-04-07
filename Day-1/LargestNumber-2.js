function InBuiltLargestNumber(arr){
    if(arr.length === 0) return null
    return Math.max(...arr)
}
const arr = [1, 2, 10, 4, 5, 6]
console.log(InBuiltLargestNumber(arr));

function largestNumber(arr){
    if(arr.length === 0) return null
    
    let maxNum = arr[0]
    for( let i=1;i<arr.length;i++){
        if(arr[i] > maxNum){
            maxNum = arr[i]
        }
    }
    return maxNum
}

console.log(largestNumber(arr));