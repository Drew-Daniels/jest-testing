/**
 * Takes a string and returns it with the first character capitalized
 * @param {*} str 
 */
function capitalize(str) {
  let result;
  if (str) {
    const firstLetter = str.slice(0,1).toUpperCase();
    const rest = str.slice(1);
    result = firstLetter + rest;
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

}

/**
 * Takes a string and returns it with each character 'shifted'
 * @param {*} str 
 */
function caesarCipher(str) {

}

module.exports = {
  capitalize,
  reverseString,
  caesarCipher,
}