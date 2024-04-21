function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const partitionIndex = partition(arr, left, right);
        // Recursively apply quickSort to the left and right partitions
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    // Choose the pivot (middle element)
    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left; // Pointer for elements less than pivot

    for (let j = left; j <= right; j++) {
        if (arr[j] < pivot) {
            // Swap arr[i] and arr[j] and move the pointer i
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }

    // Swap arr[i] (current position of pivot) with the pivot
    [arr[i], arr[Math.floor((left + right) / 2)]] = [
        arr[Math.floor((left + right) / 2)],
        arr[i],
    ];

    return i; // Return the index of the pivot
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(array);
console.log("Sorted Array using Quick Sort:", sortedArray);
