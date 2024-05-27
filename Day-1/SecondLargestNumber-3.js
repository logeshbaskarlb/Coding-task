const numbers = [10, 5, 20, 8, 15];


function findsecondLargestNumber(arr) {
    if(arr.length < 2) return undefined;
   
    let largestNumber = -Infinity;
    let SecondLargestNum = -Infinity

    for (let num of arr){
      
        if(num > largestNumber){
            SecondLargestNum = largestNumber
            largestNumber = num
        }else if(num > SecondLargestNum && num != largestNumber){
            SecondLargestNum = num
        }
    }
    return SecondLargestNum === -Infinity ? undefined : SecondLargestNum
}
console.log(findsecondLargestNumber(numbers)); //
// -----------------------------------------------------------------------------


function InbuiltFunction(arr) {
    if(arr.length < 2) return undefined;

    const sortedArray = arr.sort((a,b) =>b-a)
    return sortedArray[1]
}

console.log(InbuiltFunction(numbers));

// -----------------------------------------------------------------------------
function usingFilter(arr){
    if(arr.length < 2) return undefined;

    const largest = Math.max(...arr)

    const SecondLargestNum = Math.max(...arr.filter(num=> num !== largest))
    return SecondLargestNum
}
console.log(usingFilter(numbers));
