function isPrime(value) {
    var isValuePrime = true;
    for(var i = 2; i <= Math.sqrt(value); i+=1) {
        if (value % i === 0) {
            isValuePrime = false;
            break;
        }
    }
    return isValuePrime;
}

console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));