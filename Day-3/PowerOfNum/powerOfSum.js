

function powerRecu(x,y) {

    if(y === 0) return 1
    
    if(y > 0) {
        if (y % 2 === 0) {
            const halfPower =  powerRecu(x,y /2)
            return halfPower * halfPower
        }else {
            return x * powerRecu
        }
    }
    return 0
}

const base = 2;
const exponent = 5;
const result = powerRecursive(base, exponent);
console.log(`${base}^${exponent} is:`, result); 