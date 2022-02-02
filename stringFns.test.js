import {
  capitalize,
  reverseString,
  caesarCipher,
  shiftLetter,
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

// shiftLetter() tests
test('Shifts "a" up 1', () => {
  expect(shiftLetter('s', 1)).toBe('t');
})
test('Shifts "z" up 1', () => {
  expect(shiftLetter('z', 1)).toBe('a');
})
test('Shifts "z" up 5', () => {
  expect(shiftLetter('z', 5)).toBe('e');
})
test('Works for uppercase letters', () => {
  expect(shiftLetter('W', 1)).toBe('X');
})

// caesarCipher() tests
test('Shifts all the characters in a string with shift of 1', () => {
  expect(caesarCipher('spam', 1)).toBe('tqbn');
})

test('Handles strings that contain letter "z"', () => {
  expect(caesarCipher('zalgo', 1)).toBe('abmhp');
})

test('Keeps strings in the same case', () => {
  expect(caesarCipher('ABCde', 1)).toBe('BCDef');
})

test('Handles punctuation', () => {
  expect(caesarCipher('We attack - at Dawn!', 1)).toBe('Xf buubdl - bu Ebxo!');
})

test('Handles numbers', () => {
  expect(caesarCipher('We attack - at 7AM!', 1)).toBe('Xf buubdl - bu 7BN!');
})
