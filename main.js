let operand1 = '';
let operand2 = '';
let opt;

function buttonHandler(btn) {
    const pressValue = btn.innerText;
    const resultInput = document.getElementById('result');
    if (isNaN(pressValue)) {
        if (pressValue == 'C') {
            operand1 = '';
            operand2 = '';
            opt = undefined;
            resultInput.value = '';
            return;
        }
        if (pressValue == '=') {
            const result = perform(operand1, operand2, opt);
            resultInput.value = result;
            operand1 = '';
            operand2 = '';
            opt = undefined;
        } else {
            opt = pressValue;
        }
    } else {
        if (opt) {
            operand2 += pressValue;
            resultInput.value = operand2;
        } else {
            operand1 += pressValue;
            resultInput.value = operand1;
        }
    }
}

function perform(orand1, orand2, operator) {
    orand1 = Number(orand1);
    orand2 = Number(orand2);

    if (operator == '+') {
        return orand1 + orand2;
    } else if (operator == '-') {
        return orand1 - orand2;
    } else if (operator == 'x') {
        return orand1 * orand2;
    } else if (operator == ':') {
        return orand1 / orand2;
    }
}