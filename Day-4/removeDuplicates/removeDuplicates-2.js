

function removeDuplicate(arr) {

    return arr.reduce((unique , item) => {
        return unique.includes(item) ? unique : [...unique , item]
    },[])
    
}

const array = [1, 2, 3, 3, 4, 5, 5, 6];
const uniqueArray = removeDuplicates(array);
console.log("Array with Duplicates Removed:", uniqueArray); 