import countries from "./countryCodes.js";

document.addEventListener("DOMContentLoaded", () => {
    const apiBaseURL =
        "https://v6.exchangerate-api.com/v6/a007a3f463d5e5fd83d8fa6a/latest/";

    // Select DOM elements
    const selectFrom = document.getElementById("currency-from");
    const selectTo = document.getElementById("currency-to");
    const currencyInput = document.getElementById("fromCurrencyInput");
    const currencyResult = document.getElementById("toCurrencyInput");
    const backSpace = document.getElementById("backspace");

    // Append countries to the select elements
    countries.forEach((country) => {
        const optionFrom = document.createElement("option");
        optionFrom.value = country;
        optionFrom.textContent = country;
        selectFrom.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = country;
        optionTo.textContent = country;
        selectTo.appendChild(optionTo);
    });

    // Append input to the display
    window.appendToDisplay = (input) => {
        currencyInput.value += input;
        convertCurrency();
    };

    // Clear the display
    window.clearDisplay = () => {
        currencyInput.value = "";
        currencyResult.value = "";
        convertCurrency();
    };

    // Backspace functionality
    backSpace.addEventListener("click", () => {
        if (currencyInput.value.length > 1) {
            currencyInput.value = currencyInput.value.slice(0, -1);
        } else {
            currencyInput.value = "";
            currencyResult.value = "";
        }
        convertCurrency();
    });

    // Sanitize input to allow only valid characters (numbers and one decimal point)
    function sanitizeInput(input) {
        // Replace characters that are not numbers or the first decimal point
        return input.replace(/[^\d.]/g, function (match, offset, original) {
            // Allow only one decimal point and no other non-numeric characters
            if (match === "." && original.indexOf(".") !== offset) {
                return "";
            } else {
                return match;
            }
        });
    }

    selectFrom.value = "USD";
    selectTo.value = "NGN";

    // Fetch exchange rates from the API and convert currency
    const convertCurrency = () => {
        const amount = parseFloat(currencyInput.value.trim()); // Remove any leading/trailing spaces and parse to float
        const fromCurrency = selectFrom.value;
        const toCurrency = selectTo.value;

        // Check if the amount is a valid number
        if (!isNaN(amount) && amount > 0 && fromCurrency && toCurrency) {
            fetch(`${apiBaseURL}${fromCurrency}`)
                .then((response) => response.json())
                .then((data) => {
                    // Fetch the exchange rates
                    let fromExchangeRate = data.conversion_rates[fromCurrency];
                    let toExchangeRate = data.conversion_rates[toCurrency];

                    // Calculate the converted amount
                    const convertedAmount =
                        (amount / fromExchangeRate) * toExchangeRate;
                    currencyResult.value = convertedAmount.toFixed(2); // Set the result to the input field
                })
                .catch((error) =>
                    console.error("Error fetching exchange rates:", error)
                );
        }
    };

    // Add event listener to sanitize input in real-time and convert currency
    currencyInput.addEventListener("input", (e) => {
        e.target.value = sanitizeInput(e.target.value);
        convertCurrency();
    });

    // Add event listeners to update conversion when currency changes
    selectFrom.addEventListener("change", convertCurrency);
    selectTo.addEventListener("change", convertCurrency);
});
