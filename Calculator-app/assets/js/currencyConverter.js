const selectFrom = document.getElementById("currency-from");
const selectTo = document.getElementById("currency-to");
const currencyInput = document.getElementById("fromCurrencyInput");
const currencyResult = document.getElementById("toCurrencyInput");

function appendToDisplay(input) {
    currencyInput.value += input;
}

function clearDisplay() {
    currencyInput.value = "";
}

const backSpace = document.getElementById("backspace");
backSpace.addEventListener("click", () => {
    if (currencyInput.value.length > 1) {
        currencyInput.value = currencyInput.value.slice(0, -1);
    } else {
        currencyInput.value = "";
    }
});

function calculate() {
    try {
        let sanitizedInput = sanitizeInput(currencyInput.value);
        currencyInput.value = eval(sanitizedInput);
    } catch (error) {
        currencyInput.value = "Error";
        setTimeout(() => {
            currencyInput.value = "";
        }, 3000);
    }
}

function sanitizeInput(input) {
    // Ensure the input only contains valid characters
    input = input.replace(/[^0-9+\-*/.()]/g, "");
    return input;
}
