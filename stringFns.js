/**
 * Uses regex pattern to test if a character is a letter
 * @param {*} character 
 * @returns true | false
 */
function isLetter(character) {
  return (/[a-zA-Z]/).test(character);
}
/**
 * 
 * @param {string} letter 
 * @param {number} shift 
 * @returns Any letter in the English alphabet "shifted" n number of times up or down
 */
function shiftLetter(letter, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const isUpperCase = (letter === letter.toUpperCase());
  if (isUpperCase) {
    letter = letter.toLowerCase();
  }
  let newLetterIndex = alphabet.indexOf(letter) + shift;
  if (newLetterIndex >= alphabet.length) {
    newLetterIndex = -(alphabet.length - newLetterIndex);
  }
  let newLetter = alphabet[newLetterIndex];
  isUpperCase ? newLetter = newLetter.toUpperCase() : newLetter = newLetter;

  return newLetter;
}
/**
 * Takes a string and returns it with the first character capitalized
 * @param {*} str
 * @returns string
 */
function capitalize(str) {
  let result;

  if (str && typeof str === 'string') {
    const firstCharacter = str.slice(0,1);
    let firstPart;
    if (isLetter(firstCharacter)) {
      firstPart = firstCharacter.toUpperCase();
    } else {
      firstPart = firstCharacter;
    }
    const secondPart = str.slice(1);
    result = firstPart + secondPart;
  } else {
    result = str;
  }
  return result;
}

/**
 * Takes a string and returns it reversed
 * @param {*} str 
 */
function reverseString(str) {
  let result;
  if (str) {
    result = str.split('').reverse().join('');
  } else {
    result = str;
  }
  return result;
}

/**
 * Takes a string and a number and "shifts" every letter in that string 
 * @param {string} str 
 * @param {integer} shift 
 */
function caesarCipher(str, shift) {
  let newStr;
  const strArr = str.split('');
  let ch;
  for (let i=0; i < strArr.length; i++) {
    ch = strArr[i];
    let newCh;
    if (isLetter(ch)) {
      newCh = shiftLetter(ch, shift);
      strArr.splice(i, 1, newCh);
    }
  }
  newStr = strArr.join('');
  return newStr;
}

module.exports = {
  capitalize,
  reverseString,
  shiftLetter,
  caesarCipher,
}