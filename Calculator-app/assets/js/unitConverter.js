import unitConversionRates from "./unitConversionRates.js";

document.addEventListener("DOMContentLoaded", () => {
    const unitCategory = document.getElementById("category");
    const unitFromSelect = document.getElementById("unit-from");
    const unitToSelect = document.getElementById("unit-to");
    const unitFromInput = document.getElementById("fromUnitInput");
    const unitToResult = document.getElementById("toUnitInput");
    const backSpace = document.getElementById("backspace");

    // Initialize unit options
    const updateUnitOptions = () => {
        const unitType = unitCategory.value;
        const units = Object.keys(unitConversionRates[unitType]);

        // Clear previous options
        unitFromSelect.innerHTML = '';
        unitToSelect.innerHTML = '';

        // Populate new options
        units.forEach((unit) => {
            const optionFrom = document.createElement("option");
            const optionTo = document.createElement("option");
            optionFrom.value = optionTo.value = unit;
            optionFrom.text = optionTo.text = unit;
            unitFromSelect.appendChild(optionFrom);
            unitToSelect.appendChild(optionTo);
        });

        // Automatically set default selected values for conversion
        if (units.length > 0) {
            unitFromSelect.value = units[0];
            unitToSelect.value = units[1] ? units[1] : units[0];
        }
        convertUnits(); // Perform an initial conversion
    };

    const initUnitOptions = () => {
        unitCategory.addEventListener("change", updateUnitOptions);
        updateUnitOptions();
    };

    const convertUnits = () => {
        const unitType = unitCategory.value;
        const fromUnit = unitFromSelect.value;
        const toUnit = unitToSelect.value;
        const amount = parseFloat(unitFromInput.value); // Ensure we get the value property

        if (isNaN(amount)) return;

        const conversionRate = unitConversionRates[unitType][fromUnit][toUnit];
        let convertedValue;

        if (typeof conversionRate === "function") {
            convertedValue = conversionRate(amount);
        } else {
            convertedValue = amount * conversionRate;
        }

        unitToResult.value = convertedValue.toFixed(2);
    };

    // Append input to the display
    window.appendToDisplay = (input) => {
        unitFromInput.value += input;
        convertUnits();
    };

    // Clear the display
    window.clearDisplay = () => {
        unitFromInput.value = "";
        unitToResult.value = "";
        convertUnits();
    };

    // Backspace functionality
    backSpace.addEventListener("click", () => {
        if (unitFromInput.value.length > 1) {
            unitFromInput.value = unitFromInput.value.slice(0, -1);
        } else {
            unitFromInput.value = "";
            unitToResult.value = "";
        }
        convertUnits();
    });

    // Sanitize input to allow only valid characters (numbers and one decimal point)
    function sanitizeInput(input) {
        return input.replace(/[^\d.]/g, function (match, offset, original) {
            if (match === "." && original.indexOf(".") !== offset) {
                return "";
            } else {
                return match;
            }
        });
    }

    // Add event listener to sanitize input in real-time and convert units
    unitFromInput.addEventListener("input", (e) => {
        e.target.value = sanitizeInput(e.target.value);
        convertUnits();
    });

    // Add event listeners to update conversion when unit changes
    unitFromSelect.addEventListener("change", convertUnits);
    unitToSelect.addEventListener("change", convertUnits);

    // Initialize unit options on page load
    initUnitOptions();
});
