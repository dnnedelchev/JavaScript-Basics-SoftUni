function checkDigit(value) {
    value = value.toString();
    if (value.charAt(value.length - 3) === '3') {
        return true;
    }
    else {
        return false;
    }
}


console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));