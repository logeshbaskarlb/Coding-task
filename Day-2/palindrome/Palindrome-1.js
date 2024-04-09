function isPalindrom(str) {
    let reversed = str.split("").reverse().join("")
    return reversed === str
}

console.log(isPalindrom("logesh"));
console.log(isPalindrom("racecar"));
console.log(isPalindrom("malayalam"));
console.log(isPalindrom("logesh"));