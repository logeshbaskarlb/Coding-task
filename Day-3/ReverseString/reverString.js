

function reverseString(str) {

    if(str.length <= 1) return str;
    
    const firstChar = str[0]

    const reversedString = reverseString(str.slice(1))

    return reversedString + firstChar
}


const inputString = "hello";
const reversedString = reverseStringRecursive(inputString);
console.log(`The reversed string of "${inputString}" is "${reversedString}"`);