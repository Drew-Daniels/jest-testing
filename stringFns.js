/**
 * Uses regex pattern to test if a character is a letter
 * @param {*} character 
 * @returns true | false
 */
function isLetter(character) {
  return (/[a-zA-Z]/).test(character);
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
 * Takes a string and returns it with each character 'shifted'
 * @param {*} str 
 */
function caesarCipher(str, shift) {

}

module.exports = {
  capitalize,
  reverseString,
  caesarCipher,
}