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
} = require('../src/calculator');

describe('Calculator', () => {
    test('adds 2 + 3 to equal 5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds -2 + -3 to equal 5', () => {
        expect(add(-2, -3)).toBe(-5);
    });

    test('subtracts 5 - 3 to equal 2', () => {
        expect(subtract(5, 3)).toBe(2);
    });

    test('multiplies 4 * 3 to equal 12', () => {
        expect(multiply(4, 3)).toBe(12);
    });

    test('divides 10 / 2 to equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('power: 2^3 equals 8', () => {
        expect(power(2, 3)).toBe(8);
    });

    test('power: 5^2 equals 25', () => {
        expect(power(5, 2)).toBe(25);
    });

    test('factorial: 5! equals 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('factorial: 0! equals 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('factorial throws error for negative numbers', () => {
        expect(() => factorial(-1)).toThrow("Factorial is not defined for negative numbers");
    });

    test('square root: √16 equals 4', () => {
        expect(squareRoot(16)).toBe(4);
    });

    test('square root: √25 equals 5', () => {
        expect(squareRoot(25)).toBe(5);
    });

    test('square root throws error for negative numbers', () => {
        expect(() => squareRoot(-1)).toThrow("Cannot calculate square root of negative number");
    });

    test('randomNumber generates number within range', () => {
        const result = randomNumber(1, 10);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(10);
    });

    test('percentage: 20% of 100 equals 20', () => {
        expect(percentage(100, 20)).toBe(20);
    });

    test('percentage: 15% of 200 equals 30', () => {
        expect(percentage(200, 15)).toBe(30);
    });

    test('calculateTip: 20% tip on $100 equals $20', () => {
        expect(calculateTip(100, 20)).toBe(20);
    });

    test('isPrime: 7 is prime', () => {
        expect(isPrime(7)).toBe(true);
    });

    test('isPrime: 4 is not prime', () => {
        expect(isPrime(4)).toBe(false);
    });

    test('isPrime: 2 is prime', () => {
        expect(isPrime(2)).toBe(true);
    });

    test('isPrime: 1 is not prime', () => {
        expect(isPrime(1)).toBe(false);
    });
});
