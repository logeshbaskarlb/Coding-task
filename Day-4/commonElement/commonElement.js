function findCommonElement(arr1,arr2) {
    const commonElement = []

    for (const item of arr1){
        if(arr2.includes(item)){
            commonElement.push(item)
        }
    }
    return commonElement
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElement(array1, array2);
console.log("Common Elements:", commonElements);