// script.js
const gateTypeSelect = document.getElementById('gate-type');
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const resultDiv = document.getElementById('result');

gateTypeSelect.addEventListener('change', calculate);
input1.addEventListener('input', calculate);
input2.addEventListener('input', calculate);

function calculate() {
    const gateType = gateTypeSelect.value;
    const input1Value = parseInt(input1.value);
    const input2Value = parseInt(input2.value);
    let result;

    switch (gateType) {
        case 'AND':
            result = input1Value && input2Value;
            break;
        case 'OR':
            result = input1Value || input2Value;
            break;
        case 'NOT':
            result = !input1Value;
            break;
        case 'NAND':
            result = !(input1Value && input2Value);
            break;
        case 'NOR':
            result = !(input1Value || input2Value);
            break;
        case 'XOR':
            result = input1Value !== input2Value;
            break;
        default:
            result = 'Invalid gate type';
    }

    resultDiv.innerText = `Result: ${result ? 1 : 0}`;
}