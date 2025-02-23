function calculate() {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    if (isNaN(inputNumber)) {
        document.getElementById('result').innerText = "";
        return;
    }
    const result = (inputNumber * 2) - 0.01;
    const formula = `${inputNumber} × 2 - 0.01`;
    document.getElementById('result').innerHTML = `Selling Price: <span class="result">${result.toFixed(2)}</span><br><span class="formula">(${formula})</span>`;
}

document.getElementById('inputNumber').addEventListener('input', calculate);

window.addEventListener('focus', () => {
    const inputField = document.getElementById('inputNumber');
    inputField.focus();
    inputField.select();
});
