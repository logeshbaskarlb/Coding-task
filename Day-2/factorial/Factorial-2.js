function factorialRecursive(n) {
    if (n === 0) {
        return 1;
    }

    return n * factorialRecursive(n - 1);
}

const number = 5;
const factorial = factorialRecursive(number);
console.log(`The factorial of ${number} is:`, factorial); // Output: The factorial of 5 is: 120
