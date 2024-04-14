


function reversedArray(arr) {

    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        const temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp


        left++;
        right--;
    }
    return arr
}

const array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log("Reversed Array in Place:", array);