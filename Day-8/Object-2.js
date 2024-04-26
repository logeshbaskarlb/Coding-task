// Write a function that takes two JSON objects as input and merges them into a single JSON object. Handle conflicts if both objects have the same property.


function mergeJSONObjects(obj1, obj2) {
    // Check if either object is not a valid JSON object
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' ||
        Array.isArray(obj1) || Array.isArray(obj2)) {
        throw new Error('Input parameters must be valid JSON objects');
    }

    const merged = {};

    // Merge properties from obj1
    for (let key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            merged[key] = obj1[key];
        }
    }

    // Merge properties from obj2, handling conflicts
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (merged.hasOwnProperty(key)) {
                // Conflict handling: For conflicting keys, use obj2's value
                if (typeof obj2[key] === 'object' && typeof merged[key] === 'object') {
                    // Recursively merge objects for nested properties
                    merged[key] = mergeJSONObjects(merged[key], obj2[key]);
                } else {
                    // Use obj2's value for non-object types or leaf properties
                    merged[key] = obj2[key];
                }
            } else {
                // No conflict, add obj2's property to merged object
                merged[key] = obj2[key];
            }
        }
    }

    return merged;
}

// Example usage:
const obj1 = {
    "name": "Alice",
    "age": 30,
    "address": {
        "city": "New York",
        "country": "USA"
    }
};

const obj2 = {
    "name": "Alice Smith",
    "gender": "Female",
    "address": {
        "zip": "10001"
    }
};

const mergedObj = mergeJSONObjects(obj1, obj2);
console.log(JSON.stringify(mergedObj, null, 2));
