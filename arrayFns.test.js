import { analyzeArray } from "./arrayFns";

const intArray = [1, 2, 3,];

// object.average
test('Returns the correct average of an array with only integers', () => {
  expect(analyzeArray(intArray).average).toBe(2);
})

// object.min
test('Returns the correct minimum value of an array with only integers', () => {
  expect(analyzeArray(intArray).min).toBe(1);
})


// object.max
test('Returns the correct maximum value of an array with only integers', () => {
  expect(analyzeArray(intArray).max).toBe(3);
})

// object.length
test('Returns the correct length of an array with only integers', () => {
  expect(analyzeArray(intArray).length).toBe(3);
})
