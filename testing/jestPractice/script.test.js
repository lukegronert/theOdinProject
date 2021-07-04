const modules = require('./script');

test('capitalize function takes string and returns String', () => {
    expect(modules.capitalize('string')).toBe('String');
});

test('reverseString function takes string and return gnirts', () => {
    expect(modules.reverseString('string')).toBe('gnirts');
})

test('calculator.add takes numbers and adds them together', () => {
    expect(modules.calculator.add(1,5,8)).toBe(14);
})

test('calculator.subtract takes numbers and subtracts them together', () => {
    expect(modules.calculator.subtract(10,2,3)).toBe(5);
})

test('calculator.multiply takes numbers and multiplies them together', () => {
    expect(modules.calculator.multiply(2,2,10)).toBe(40);
})

test('calculator.divide takes numbers and divides them', () => {
    expect(modules.calculator.divide(2,2,10)).toBe(0.1);
})

test('caesarCypher returns cypher depending on key number', () => {
    expect(modules.caesarCypher('Hey, Jake', 2)).toBe('Jgb, Lcmg');
})

test('analyze().average returns average', () => {
    expect(modules.analyze(2,4,6,8).average).toBe(5);
})

test('analyze().minimum returns minimum', () => {
    expect(modules.analyze(2,4,6,8).minimum).toBe(2);
})

test('analyze().maximum returns maximum', () => {
    expect(modules.analyze(2,4,6,8).maximum).toBe(8);
})

test('analyze().length returns length', () => {
    expect(modules.analyze(2,4,6,8).length).toBe(4);
})
