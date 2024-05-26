

function findCommonElement (arr1, arr2) {
    
    const set = new Set(arr1);
    const commonElements = arr2.filter((item) => set.has(item))

    const uniqueCommonElements = [...new Set(commonElements)];

    return uniqueCommonElements;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElement(array1, array2);
console.log("Common Elements:", commonElements);
