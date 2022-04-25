var operationButtons = document.getElementsByClassName('operations-button');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function number1() {
    return Number(input1.value);
}

function number2() {
    return Number(input2.value);
}

function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        window.alert('unknown operation');
    }

    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDivide];

for (var i = 0; i < operationButtons.length; i ++) {
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}