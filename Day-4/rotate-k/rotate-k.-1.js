

function rotateRight(arr, k) {

    const n = arr.length
    k = k % n
    

    if(k === 0){
        return arr
    }

    const rotatePart = arr.splice(n-k, k)

    arr.unshift(...rotatePart)

    return arr
}

const array = [1, 2, 3, 4, 5];
const k = 2;
const rotatedArray = rotateRight(array, k);
console.log("Rotated Array:", rotatedArray);