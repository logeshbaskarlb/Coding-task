
function fibonacciRec(n) {

    if( n===0){
        return 0
    }
    if(n===1){
        return 1
    }
    return fibonacciRec(n-1) + fibonacciRec(n-2)
    
}

const n = 6;
const fibonacciNumber = fibonacciRecursive(n);
console.log(`The ${n}th Fibonacci number is:`, fibonacciNumber);