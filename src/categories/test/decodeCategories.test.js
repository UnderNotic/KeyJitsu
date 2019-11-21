import decodeCategories from "../decodeCategories";

it("should decode categories", () => {
  var encodedNumber = decodeCategories(5);
  expect(encodedNumber.length).toBe(2);
  expect(encodedNumber).toEqual(expect.arrayContaining([2, 0]));
});

it("should decode categories 2", () => {
  var encodedNumber = decodeCategories(8);
  expect(encodedNumber.length).toBe(1);
  expect(encodedNumber).toEqual(expect.arrayContaining([3]));
});

it("should decode categories 3", () => {
  var encodedNumber = decodeCategories(96);
  expect(encodedNumber.length).toBe(2);
  expect(encodedNumber).toEqual(expect.arrayContaining([6, 5]));
});

it("should not go into infite loop when wrong parameter", () => {
  decodeCategories(6);
  decodeCategories(0);
  decodeCategories(-1);
});
