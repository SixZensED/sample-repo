function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function squareRoot(n) {
    if (n < 0) {
        throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(n);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function percentage(value, percent) {
    return (value * percent) / 100;
}

function calculateTip(bill, tipPercent) {
    return bill * (tipPercent / 100);
}

function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

module.exports = { 
    add, 
    subtract, 
    multiply, 
    divide, 
    power, 
    factorial, 
    squareRoot, 
    randomNumber, 
    percentage,
    calculateTip,
    isPrime
};
