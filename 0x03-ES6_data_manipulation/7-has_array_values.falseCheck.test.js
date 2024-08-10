import hasValuesFromArray from "./7-has_array_values.js";

test("Create a set using an array of elements. Pass an array containing an element that isn't in resultant set and check if it returns false", () => {
  const array = [1, 2, 'test'];
  const set = new Set(array);
  const array2 = [1, 2, 'test', 'banana'];
  expect(hasValuesFromArray(set, array2)).toBe(false);
});
