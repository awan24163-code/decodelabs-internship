// ==========================================
// 1. DOM SELECTORS (Variables Setup)
// ==========================================
const themeBtn = document.querySelector('.js-theme-btn');
const nameInput = document.querySelector('.js-name-input');
const greetingOutput = document.querySelector('.js-greeting-output');
const counterValue = document.querySelector('.js-counter-value');
const plusBtn = document.querySelector('.js-plus-btn');
const minusBtn = document.querySelector('.js-minus-btn');

// Variable jo counter ka number track karega
let count = 0;

// ==========================================
// 2. FUNCTIONS (Process Logic)
// ==========================================

// Feature 1: Theme Toggle Logic
function toggleTheme() {
    document.body.classList.toggle('dark-mode');

    // Button ka text dynamically update karna
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
}

// Feature 2: Dynamic Greeting Logic
function updateGreeting() {
    const userName = nameInput.value.trim();

    if (userName !== "") {
        greetingOutput.textContent = `Hello, ${userName}! Welcome to DecodeLabs. ✨`;
    } else {
        greetingOutput.textContent = "Hello, Guest! Welcome to DecodeLabs.";
    }
}

// Feature 3: Counter Logic
function incrementCounter() {
    count++;
    counterValue.textContent = count; // Output Mutation
}

function decrementCounter() {
    count--;
    counterValue.textContent = count; // Output Mutation
}

// ==========================================
// 3. EVENT LISTENERS (Inputs)
// ==========================================
themeBtn.addEventListener('click', toggleTheme);

// 'input' event tab chalta hai jab user types karein (Real-time update)
nameInput.addEventListener('input', updateGreeting);

plusBtn.addEventListener('click', incrementCounter);
minusBtn.addEventListener('click', decrementCounter);