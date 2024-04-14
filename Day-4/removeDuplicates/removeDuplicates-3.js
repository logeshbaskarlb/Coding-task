

function removeDuplicates(arr) {

    const uniqueArray = []

    for(let i = 0 ; i < arr.length ; i++) {
        let isDuplicate = false;

        for(let j = 0 ; j < arr.length ; j++){
            if(arr[i] === uniqueArray[j]){
                isDuplicate = true ;
                break
            }
        }

        if(!isDuplicate){
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray
}

const array = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray = removeDuplicates(array);
console.log("Array with Duplicates Removed:", uniqueArray);