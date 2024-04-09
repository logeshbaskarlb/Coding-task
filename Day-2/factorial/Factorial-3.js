


function factorialMemoization(n) {
    const memo = [];

    function factorialHelper(x) {

        if (x === 0) {
            return 1;
        }

        if (memo[x] !== undefined) {
            return memo[x];
        }

        memo[x] = x * factorialHelper(x - 1);
        return memo[x];
    }

    return factorialHelper(n);
}

const number = 5;
const factorial = factorialMemoization(number);
console.log(`The factorial of ${number} is:`, factorial); // Output: The factorial of 5 is: 120
