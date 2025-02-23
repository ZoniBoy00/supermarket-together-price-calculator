// Function to calculate the selling price
function calculate() {
    const inputNumber = parseFloat(document.getElementById('inputNumber').value);
    
    // If input is not a valid number, clear result
    if (isNaN(inputNumber)) {
        document.getElementById('result').innerText = "";
        return;
    }

    // Calculate selling price using formula (purchase price * 2 - 0.01)
    const result = (inputNumber * 2) - 0.01;
    const formula = `${inputNumber} × 2 - 0.01`;

    // Update result display with formatted price and formula
    document.getElementById('result').innerHTML = `Selling Price: <span class="result">${result.toFixed(2)}</span><br><span class="formula">(${formula})</span>`;
}

// Add event listener to input field for real-time calculations
document.getElementById('inputNumber').addEventListener('input', calculate);

// Auto-focus input field when page is active
window.addEventListener('focus', () => {
    const inputField = document.getElementById('inputNumber');
    inputField.focus();
    inputField.select();
});
