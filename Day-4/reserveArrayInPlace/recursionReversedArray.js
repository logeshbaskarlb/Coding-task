

function recursionReserverdArray(arr, start = 0, end = arr.length - 1) {

    if(start >= end){
        return arr
    }

    [arr[start], arr[end]] = [arr[end] , arr[start] , arr[end]]

    return recursionReserverdArray(arr, start + 1, end -1)

}

const array = [1, 2, 3, 4, 5];
recursionReserverdArray(array);
console.log("Reversed Array in Place:", array);