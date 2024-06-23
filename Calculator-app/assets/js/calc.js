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
        addToHistory();
        display.value = eval(sanitizedInput);
        addToHistory();
        
    } catch (error) {
        display.value = "Error";
        setTimeout(() => {
            display.value = "";
        }, 3000);
    }
}
function addToHistory () {
    const sanitizedInput = sanitizeInput(display.value);
    const content = `${sanitizedInput} <br>`
    const historyList = document.getElementById('history-items');
    const entry = document.createElement('li');
    entry.innerHTML = content;
    entry.classList.add('entry');
    historyList.appendChild(entry);
}
function sanitizeInput(input) {
    // Remove leading zeroes in numbers
    input = input.replace(/\b0+(\d)/g, '$1');
    // Replace percentages with their decimal equivalents
    input = input.replace(/(\d+(\.\d+)?)%/g, (match, p1) => {
        return parseFloat(p1) / 100;
    });
    // Ensure the input only contains valid characters
    input = input.replace(/[^0-9+\-*/.()]/g, "");
    return input;
}
display.addEventListener("input", (e) => {
    e.target.value = sanitizeInput(e.target.value);
});
const backSpace = document.getElementById("backspace");
backSpace.addEventListener("click", () => {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "";
    }
});


const closeHistory = document.getElementById('close-history');
const openHistory = document.getElementById('open-history');
const history = document.querySelector('.history');

openHistory.addEventListener('click', () => {
    history.classList.add('open');
});

closeHistory.addEventListener('click', () => {
    history.classList.remove('open');
});