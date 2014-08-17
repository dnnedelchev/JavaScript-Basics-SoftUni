function calcSupply(value) {
    var age = value[0],
        maxAge = value[1],
        foodPerDay = value[2];

    var result = (maxAge - age) * 365 * foodPerDay;
    return result + 'kg of chocolate would be enough until I am ' + maxAge + 'years old.';
}

console.log(calcSupply([38, 118, 0.5]));
console.log(calcSupply([20, 87, 2]));
console.log(calcSupply([16, 102, 1.1]));