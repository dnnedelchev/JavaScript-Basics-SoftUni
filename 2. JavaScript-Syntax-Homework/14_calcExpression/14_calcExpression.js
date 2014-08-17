function calc(expression) {
    expression = expression.replace(/[^0-9+-//*]+/g, '');

    return eval(expression);
}

function setResult(result) {
    document.getElementById('result').value = result;
}
