const { add, subtract, multiply, divide } = require('./calcFunctions');

describe('Calculator tests', () => {
    test('add', () => {
        expect(add(2, 4)).toBe(6);
        expect(add(3, 5)).toBe(8);
    });
    
    test('subtract', () => {
        expect(subtract(5, 2)).toBe(3);
        expect(subtract(6, 3)).toBe(3);
    });
    
    test('multiply', () => {
        expect(multiply(3, 2)).toBe(6);
        expect(multiply(4, 5)).toBe(20);
    });
    
    test('divide', () => {
        expect(divide(20, 2)).toBe(10);
        expect(divide(30, 10)).toBe(3);
    });     
});