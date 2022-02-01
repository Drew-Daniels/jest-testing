import { analyzeArray } from "./arrayFns";

const intArray = [1, 2, 3,];
const analyzerObject = analyzeArray(intArray);

// object.average
test('Returns the correct average of an array with only integers', () => {
  expect(analyzerObject.avg).toBe(2);
})

// object.min
test('Returns the correct minimum value of an array with only integers', () => {
  expect(analyzerObject.min).toBe(1);
})

// object.max
test('Returns the correct maximum value of an array with only integers', () => {
  expect(analyzerObject.max).toBe(3);
})

// object.length
test('Returns the correct length of an array with only integers', () => {
  expect(analyzerObject.len).toBe(3);
})
