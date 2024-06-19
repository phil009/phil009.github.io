const apiKey = 'a007a3f463d5e5fd83d8fa6a';

// Select DOM elements
const selectFrom = document.getElementById("currency-from");
const selectTo = document.getElementById("currency-to");
const currencyInput = document.getElementById("fromCurrencyInput");
const currencyResult = document.getElementById("toCurrencyInput");
const backSpace = document.getElementById("backspace");

// Append input to the display
function appendToDisplay(input) {
    currencyInput.value += input;
}

// Clear the display
function clearDisplay() {
    currencyInput.value = "";
}

// Backspace functionality
backSpace.addEventListener("click", () => {
    if (currencyInput.value.length > 1) {
        currencyInput.value = currencyInput.value.slice(0, -1);
    } else {
        currencyInput.value = "";
    }
});

// Sanitize input to allow only valid characters
function sanitizeInput(input) {
    input = input.replace(/[^0-9+\-*/.()]/g, "");
    return input;
}

// Add event listener to sanitize input in real-time
currencyInput.addEventListener("input", (e) => {
    e.target.value = sanitizeInput(e.target.value);
});

// Fetch exchange rates from the API
const getExchangeRates = async (from, to) => {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`);
    const data = await response.json();
    return data.conversion_rates[to];
};

// Example usage
getExchangeRates('USD', 'EUR').then(rate => {
    console.log(`Exchange rate from USD to EUR: ${rate}`);
});
