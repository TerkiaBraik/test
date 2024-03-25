const isAnagram = require('./isAnagram');

describe('isAnagram function', () => {
    test('should return true for anagrams', () => {
        expect(isAnagram('listen', 'silent')).toBe(true);
    })});
