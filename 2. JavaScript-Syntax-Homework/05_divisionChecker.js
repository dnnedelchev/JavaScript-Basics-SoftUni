function divisionBy3(value) {
    var result = 'the number is divided by 3 without remainder';
    if (value % 3 !== 0) {
        result = 'the number is not divided by 3 without remainder';
    }
    return result;
}

console.log(divisionBy3(12));
console.log(divisionBy3(190));
console.log(divisionBy3(591));