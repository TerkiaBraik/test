const reverseString = require('./reverseString');

describe('reverseString function', () => {
    test('should reverse a string', () => {
        expect(reverseString('jam')).toBe('maj');
    })});