

function sumOfDigits(n) {
    
 if (num < 10) return num;
    let temp = num%10
    return temp + sumOfDigits((num-temp) / 10);

}


console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(456)); // 15
console.log(sumOfDigits(789)); // 24
