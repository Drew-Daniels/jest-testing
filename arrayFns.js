/**
 * Checks that:
 * 1.) An object is an Array object
 * 2.) All items in this array are numbers
 * @param {*} x
 */
function checkArray(obj) {
  // First - verify object is an array
  if (!Array.isArray(obj)) {
    throw new Error('Argument must be an array');
  }
  // Second - verify all array items are numbers
  let arr = obj;
  arr.forEach(function(item) {
    if (typeof item !== 'number') {
      throw new Error('All array items must be numbers');
    }
  })
}

/**
 * Returns the sum of all items in an array
 * @param {array} arr 
 * @returns number 
 */
function getArrSum(arr) {
  checkArray(arr);
  let sum = 0;
  arr.forEach((item) => sum += item);
  return sum;
}

/**
 * Returns the average value from all items in an array
 * @param {array} arr 
 * @returns number
 */
function getArrAvg(arr) {
  checkArray(arr);
  let sum = getArrSum(arr);
  let len = getArrLen(arr);
  return (sum / len);
}

/**
 * Returns the minimum value from an array
 * @param {array} arr 
 * @returns number
 */
function getArrMin(arr) {
  checkArray(arr);
  let min;
  arr.forEach(function(item) {
    if ((typeof min === 'undefined') || (item < min)) {
      min = item;
    }
  })
  return min;
}

/**
 * Returns the maximum value from an array
 * @param {array} arr 
 * @returns number
 */
function getArrMax(arr) {
  checkArray(arr);
  let max;
  arr.forEach(function(item) {
    if ((typeof max === 'undefined') || (item > max)) {
      max = item;
    }
  });
  return max;
}

/**
 * Returns the number of items in an array
 * @param {array} arr 
 * @returns number
 */
function getArrLen(arr) {
  checkArray(arr);
  return arr.length;
}
/**
 * Takes an array of numbers and returns an object with the following properties: average, min, max, and length
 * @param {array} arr 
 * @returns (Ex.) object = {
 *  avg: 4,
 *  min: 1,
 *  max: 8,
 *  len: 6
 * }
 */
function analyzeArray(arr) {
  let analyzerObj = {};
  analyzerObj.avg = getArrAvg(arr);
  analyzerObj.min = getArrMin(arr);
  analyzerObj.max = getArrMax(arr);
  analyzerObj.len = getArrLen(arr);
  return analyzerObj;
}

module.exports = {
  analyzeArray,
}