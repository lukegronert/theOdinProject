const modules = require('./script');

test('Takes string and returns String', () => {
    expect(modules.capitalize('string')).toBe('String');
});

test('Takes string and return gnirts', () => {
    expect(modules.reverseString('string')).toBe('gnirts');
})

test('Takes numbers and adds them together', () => {
    expect(modules.calculator.add(1,5,8)).toBe(14);
})

test('Takes numbers and subtracts them together', () => {
    expect(modules.calculator.subtract(10,2,3)).toBe(5);
})

test('Takes numbers and multiplies them together', () => {
    
})

test('Takes numbers and divides them', () => {
    
})