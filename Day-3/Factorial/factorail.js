

function factorial(n) {
    
    if(n === 0) {
        return 1;
    }

    return n * factorial(n-1)

}

const number = 5;
const factorial = factorialRecursive(number);
console.log(`The factorial of ${number} is:`, factorial);