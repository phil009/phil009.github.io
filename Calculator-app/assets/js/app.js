const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let sanitizedInput = sanitizeInput(display.value);
        display.value = eval(sanitizedInput);
    } catch (error) {
        display.value = "Error";
        setTimeout(() => {
            display.value = "";
        }, 3000);
    }
}

function sanitizeInput(input) {
    // Replace leading zeroes in numbers with a single zero
    return input
        .replace(/(^|[^0-9])0+([0-9])/g, "$1$2") //The regular expression \b0+(\d) matches leading zeroes (0+) followed by a digit (\d) at a word boundary (\b). The $1 in the replacement string ensures that the digit after the leading zeroes is retained.
        .replace(/[^0-9+\-*/.()]/g, ""); //Another regular expression [^0-9+\-*/.()] matches any character that is not a digit, operator, decimal point, or parentheses, and removes it.
}

const backSpace = document.getElementById("backspace");
backSpace.addEventListener("click", () => {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "";
    }
});
