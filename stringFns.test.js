import {
  capitalize,
  reverseString,
  caesarCipher,
} from './stringFns';

// capitalize() tests
test('Capitalizes the first letter in a string with only letters', () => {
  expect(capitalize('spam')).toBe('Spam');
})

test('Returns a string as is if the first character in a string is not a letter', () => {
  expect(capitalize('5pam')).toBe('5pam');
})

test('Returns blank string if passed in blank string', () => {
  expect(capitalize('')).toBe('');
})
// reverseString() tests
test('Reverses the order of all the characters in a string', () => {
  expect(reverseString('spam')).toBe('maps');
})

test('Handles blank strings', () => {
  expect(reverseString('')).toBe('');
})

// caesarCipher() tests
test('Shifts all the characters in a string with shift of 1', () => {
  expect(caesarCipher('spam', 1)).toBe('tqbn');
})

test('Handles strings that contain letter "z"', () => {
  expect(caesarCipher('zalgo', 1)).toBe('zalgo');
})

test('Keeps strings in the same case', () => {
  expect(caesarCipher('ABCde', 1)).toBe('BCDef');
})

test('Handles punctuation', () => {
  expect(caesarCipher('We attack - at Dawn!', 1)).toBe('xf buubdl - bu ebxo!');
})
