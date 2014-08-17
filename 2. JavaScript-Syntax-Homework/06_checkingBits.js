function bitChecker(value) {
    value = value & 8 >> 3;
    return value === 1;
}

console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));

