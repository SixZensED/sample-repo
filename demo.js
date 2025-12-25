const {
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
} = require('./src/calculator');

console.log('🧮 Calculator Demo - Fun Functions!\n');

// Basic operations
console.log('📊 Basic Operations:');
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`10 - 4 = ${subtract(10, 4)}`);
console.log(`5 × 6 = ${multiply(5, 6)}`);
console.log(`20 ÷ 4 = ${divide(20, 4)}`);

// Power
console.log('\n⚡ Power:');
console.log(`2^8 = ${power(2, 8)}`);
console.log(`3^4 = ${power(3, 4)}`);

// Factorial
console.log('\n🔢 Factorial:');
console.log(`5! = ${factorial(5)}`);
console.log(`7! = ${factorial(7)}`);

// Square Root
console.log('\n√ Square Root:');
console.log(`√64 = ${squareRoot(64)}`);
console.log(`√144 = ${squareRoot(144)}`);

// Random Number
console.log('\n🎲 Random Number:');
console.log(`Random number between 1-100: ${randomNumber(1, 100)}`);
console.log(`Random number between 1-100: ${randomNumber(1, 100)}`);
console.log(`Random number between 1-100: ${randomNumber(1, 100)}`);

// Percentage
console.log('\n📈 Percentage:');
console.log(`20% of 500 = ${percentage(500, 20)}`);
console.log(`15% of 1000 = ${percentage(1000, 15)}`);

// Tip Calculator
console.log('\n💰 Tip Calculator:');
const bill = 150;
const tipPercent = 18;
const tip = calculateTip(bill, tipPercent);
console.log(`Bill: $${bill}`);
console.log(`Tip (${tipPercent}%): $${tip}`);
console.log(`Total: $${bill + tip}`);

// Prime Checker
console.log('\n🔍 Prime Number Checker:');
const numbers = [2, 3, 4, 5, 7, 9, 11, 13, 17, 20];
numbers.forEach(num => {
    console.log(`${num} is ${isPrime(num) ? '✅ prime' : '❌ not prime'}`);
});

console.log('\n✨ Have fun calculating!');

