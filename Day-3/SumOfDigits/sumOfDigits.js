

function sumOfDigitsRecursive(n) {

    if(n == 0) return 0;
    
    const lastDigit = n % 10

    const remainingDigits = Math.floor(n / 10)
    const sumOfRemainingDigits = sumOfDigitsRecursive(remainingDigits)

    const sum = lastDigit + sumOfRemainingDigits

    return sum

}


const number = 12345;
const sumOfDigits = sumOfDigitsRecursive(number);
console.log(`The sum of digits of ${number} is:`, sumOfDigits);